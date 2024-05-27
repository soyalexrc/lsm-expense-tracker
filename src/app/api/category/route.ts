import connect from "@/lib/db";
import {NextResponse} from "next/server";
import Category from "@/lib/db/models/category";


export async function GET() {
    try {
        await connect()
        const data =  await Category.find();
        return  NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }
}
