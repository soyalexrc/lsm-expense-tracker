import connect from "@/lib/db";
import Expense from "@/lib/db/models/expense";
import {NextRequest, NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";
import Category from "@/lib/db/models/category";


export async function POST(req: NextRequest) {
    const { userId } = auth();
    const {dateFrom, dateTo, categoryId, paymentMethod, title} = await req.json();
    const query: any = { userId: userId };

    await Category.find({});

    // Add filters based on provided values
    if (dateFrom && dateTo) {
        query.date = { $gte: dateFrom, $lte: dateTo }; // Filter by date range
    }
    if (categoryId) {
        query.category = categoryId; // Filter by category
    }
    if (paymentMethod) {
        query.paymentMethod = paymentMethod; // Filter by payment method
    }
    if (title) {
        query.title = { $regex: new RegExp(title, 'i') }; // Filter by title (case-insensitive)
    }
    try {
        await connect()
        const data =  await Expense
            .find(query)
            .sort({ date: -1 })
            .populate('category');
        return  NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }
}
