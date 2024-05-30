import connect from "@/lib/db";
import Expense from "@/lib/db/models/expense";
import {NextRequest, NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";
import UserSettings from "@/lib/db/models/user-settings";


export async function POST(req: NextRequest) {
    const { userId } = auth();
    const {dateFrom, dateTo} = await req.json();

    const match =
        dateFrom && dateTo
            ? {
                $match: {
                    userId,
                    date: {
                        $gte: new Date(dateFrom),
                        $lte: new Date(dateTo),
                    },
                },
            }
            : {
                $match: {
                    userId,
                },
            };

    try {
        await connect()
        const settings = await UserSettings.findOne({ userId });
        const totalAmount = await Expense.aggregate([
            match,
            { $group: { _id: null, totalAmount: { $sum: '$amount' } } },
            { $project: { totalAmount: { $round: ['$totalAmount', 2] } } },
        ]);
        const totalAmountByCategory = await Expense.aggregate([
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'category',
                },
            },
            match,
            {
                $group: {
                    _id: '$category._id',
                    value: { $sum: '$amount' },
                    name: { $first: '$category.title' },
                    color: { $first: '$category.color' },
                },
            },
            {
                $sort: {
                    name: 1,
                },
            },
            {
                $project: {
                    value: { $round: ['$value', 2] },
                    _id: 0,
                    color: { $arrayElemAt: ['$color', 0] },
                    name: { $arrayElemAt: ['$name', 0] }, // Get the first element from category array (category document)
                },
            },
        ]);
        const totalAmountByDay = await Expense.aggregate([
            {
                $match: {
                    userId,
                    date: {
                        $gte: new Date(dateFrom),
                        $lte: new Date(dateTo),
                    },
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
                    totalAmount: { $sum: '$amount' },
                },
            },
            {
                $project: {
                    date: '$_id',
                    _id: 0,
                    totalAmount: { $round: ['$totalAmount', 2] },
                },
            },
            { $sort: { date: 1 } },
        ]);
        const totalByPaymentMethod = await Expense.aggregate([
            match,
            {
                $group: {
                    _id: '$paymentMethod',
                    totalAmount: { $sum: '$amount' },
                },
            },
            {
                $project: {
                    totalAmount: { $round: ['$totalAmount', 2] },
                    _id: 1,
                },
            },
        ]);
        const totalAmountByPaymentMethod = mergePaymentData(
            settings?.paymentMethods,
            totalByPaymentMethod,
        );
        return  NextResponse.json({
            totalAmount: totalAmount[0]?.totalAmount ?? 0,
            totalAmountByCategory,
            totalAmountByDay,
            totalAmountByPaymentMethod,
        })
    } catch (err) {
        console.log(err);
    }
}

function mergePaymentData(paymentMethods: any, totalByPaymentMethod: any) {
    // Create a map for efficient lookup by _id
    const totalMap: Map<string, number> = new Map();
    for (const item of totalByPaymentMethod) {
        totalMap.set(item._id, item.totalAmount);
    }

    // Merge payment methods with total amounts
    const mergedData = [];
    for (const method of paymentMethods) {
        const totalAmount = totalMap.get(method._id) || 0; // Use 0 if no matching total is found
        mergedData.push({ title: method.title, totalAmount });
    }

    return mergedData;
}
