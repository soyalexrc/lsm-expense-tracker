'use server';

import connect from "@/lib/db";
import Category from "@/lib/db/models/category";
import {auth} from "@clerk/nextjs/server";
import UserSettings from "@/lib/db/models/user-settings";
import {NextResponse} from "next/server";

export async function getCategories() {
    try {
        await connect()
        return  await Category.find()
    } catch (err) {
        console.log(err);
    }
}

export async function getUserSettingsByUserId() {
    const { userId } = auth();

    const update = {
        $setOnInsert: { userId, paymentMethods: [] },
    };
    const options = { upsert: true, new: true };
    try {
        await connect()
        return await UserSettings.findOneAndUpdate({ userId }, update, options);
    } catch (err) {
        console.log(err);
    }
}
