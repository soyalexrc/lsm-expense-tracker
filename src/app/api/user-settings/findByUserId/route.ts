import connect from "@/lib/db";
import {NextRequest, NextResponse} from "next/server";
import UserSettings from "@/lib/db/models/user-settings";
import {auth} from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
    const { userId } = auth();

    const update = {
        $setOnInsert: { userId, paymentMethods: [] },
    };
    const options = { upsert: true, new: true };
    try {
        await connect()
        const data =  await UserSettings.findOneAndUpdate({ userId }, update, options);
        return  NextResponse.json(data)
    } catch (err) {
        console.log(err);
    }
}
