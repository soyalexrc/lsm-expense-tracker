'use client'
import {useAuth} from "@clerk/nextjs";
import {DateRange} from "react-day-picker";
import {useState} from "react";
import {useGetExpensesByUserIdQuery} from "@/lib/store/services/expenses";
import {useGetAllCategoriesQuery} from "@/lib/store/services/categories";
import {useGetUserSettingsByUserIdQuery} from "@/lib/store/services/userSettings";

export default function DashboardPage() {
    const {userId} = useAuth();
    const [date, setDate] = useState<DateRange | undefined>(undefined)
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const { data, isLoading, error } = useGetExpensesByUserIdQuery({
        userId: userId!,
        title,
        categoryId: category,
        paymentMethod,
        dateFrom: date?.from ? date.from.toDateString() : '',
        dateTo: date?.to ? date.to.toDateString() : '',
    });
    const { data: categories, isLoading: cLoading, error: cError,  } = useGetAllCategoriesQuery()
    const {error: sError, data: settings, isLoading: sLoading} = useGetUserSettingsByUserIdQuery({
        userId: userId!
    })


    if (isLoading) return 'Loading...'

    if (error) return 'An error has ocurred'

    return (
        <div>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}
