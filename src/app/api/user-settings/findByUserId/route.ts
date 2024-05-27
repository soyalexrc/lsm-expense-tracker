import connect from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";
import UserSettings from "@/lib/db/models/user-settings";

export async function POST(req: NextRequest) {
    const cookies = req.cookies;
    console.log(cookies);
    const update = {
        $setOnInsert: { userId: '', paymentMethods: [] },
    };
    const options = { upsert: true, new: true };
    try {
        await connect()
        const data =  await UserSettings.findOneAndUpdate({ userId: '' }, update, options);
        return  NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }
}
