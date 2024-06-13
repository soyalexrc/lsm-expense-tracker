'use client';

import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {DatePicker} from "@/components/ui/date-picker";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useState} from "react";
import {DateRange} from "react-day-picker";
import {useGetAllCategoriesQuery} from "@/lib/store/services/categories";
import {useGetUserSettingsByUserIdQuery} from "@/lib/store/services/userSettings";

export default function ExpensesDataFilters( ){
    const [date, setDate] = useState<DateRange | undefined>(undefined)
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const { data: categories, isLoading: cLoading, error: cError,  } = useGetAllCategoriesQuery()
    const {error: sError, data: settings, isLoading: sLoading} = useGetUserSettingsByUserIdQuery()

    return (
        <div className={'grid grid-cols-5 gap-4 mb-10'}>
            <div className="relative sm:col-span-1 col-span-5">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"/>
                <Input
                    type="search"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Search expenses..."
                    className="w-full appearance-none bg-background pl-8 shadow-none "
                />
            </div>
            <DatePicker date={date} setDate={setDate} className='sm:col-span-1 col-span-5'/>
            <Select disabled={cLoading || Boolean(cError)} value={category}
                    onValueChange={(value) => value === 'all' ? setCategory('') : setCategory(value)}>
                <SelectTrigger className='sm:col-span-1 col-span-5'>
                    <SelectValue placeholder="Select a category"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        <SelectItem value='all'>All</SelectItem>
                        {
                            categories?.map(category => (
                                <SelectItem key={category._id}
                                            value={category._id}>{category.title}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select disabled={Boolean(sError) || sLoading} value={paymentMethod}
                    onValueChange={(value) => value === 'all' ? setPaymentMethod('') : setPaymentMethod(value)}>
                <SelectTrigger className='sm:col-span-1 col-span-5'>
                    <SelectValue placeholder="Select a payment method"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Payment Methods</SelectLabel>
                        <SelectItem value='all'>All</SelectItem>
                        {
                            settings?.paymentMethods.map(paymentMethod => (
                                <SelectItem key={paymentMethod._id}
                                            value={paymentMethod._id}>{paymentMethod.title}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            {/*<Button className='sm:col-span-1 col-span-5'>Search</Button>*/}
        </div>
    )
}
