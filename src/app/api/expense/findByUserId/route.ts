import connect from "@/lib/db";
import Expense from "@/lib/db/models/expense";
import {NextResponse} from "next/server";


export async function POST() {
    try {
        await connect()
        const data =  await Expense.find();
        return  NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }
}
