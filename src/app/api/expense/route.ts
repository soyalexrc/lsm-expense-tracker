import {NextRequest, NextResponse} from "next/server";
import {auth} from "@clerk/nextjs/server";
import Expense from "@/lib/db/models/expense";


export async function POST(req: NextRequest) {
    const { userId } = auth();
    const body = await req.json();
    try {
        const expense = new Expense({ ...body, userId });
        const result = await expense.save();
        return NextResponse.json(result);
    } catch (e) {
        console.log(e)
    }
}
