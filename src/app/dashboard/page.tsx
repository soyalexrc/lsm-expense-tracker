'use client';
import {useAuth} from "@clerk/clerk-react";
import {DateRange} from "react-day-picker";
import { useState } from "react";
import {getDateRangeByMonth, getDateRangeByYear, getPastTenYears, getWeeksInMonth, MONTHS} from "@/lib/helpers/date";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import DateBasedChart from "@/components/expenses/charts/DateBasedChart";
import CategoriesChart from "@/components/expenses/charts/CategoriesChart";
import PaymentMethodsChart from "@/components/expenses/charts/PaymentMethodsChart";
import useSize from "@/lib/hooks/useSize";
import {useGetTotalsQuery} from "@/lib/store/services/expenses";

const BREAKPOINT = 756;


export default function DashboardPage() {
    const [year, setYear] = useState<string>(String(new Date().getFullYear()));
    const [month, setMonth] = useState<string>(String(new Date().getMonth()));
    const [week, setWeek] = useState<string>('');
    const windowSize = useSize()
    const [date, setDate] = useState<DateRange | undefined>(getDateRangeByMonth(Number(year), Number(month)))

    const {error, data, isLoading} = useGetTotalsQuery({
        dateFrom: date?.from ? date.from.toDateString() : '',
        dateTo: date?.to ? date.to.toDateString() : '',
    });

    function onDateChange(value: string, type: 'year' | 'month' | 'week') {
        if (type === 'month') {
            if (value === 'full year') {
                setMonth('');
                setDate(getDateRangeByYear(Number(year)));
                return;
            }
            setMonth(value);
            setDate(getDateRangeByMonth(Number(year), Number(value)))
        } else if (type === 'year') {
            setYear(value);
            setDate(getDateRangeByMonth(Number(value), Number(month)))
        } else {
            if (value === 'full month') {
                setWeek('')
                setDate(getDateRangeByMonth(Number(year), Number(month)));
                return;
            }
            setWeek(value);
            const dateFromByWeek = new Date(value.split(' to ')[0]).setFullYear(Number(year))
            const dateToByWeek = new Date(value.split(' to ')[1]).setFullYear(Number(year))

            setDate({
                from: new Date(dateFromByWeek),
                to: new Date(dateToByWeek),
            })

        }
    }

    if (isLoading) return 'loading...'

    if (error) 'An error ocurred...'
    return (
        <div>
            <title>LSM Expense Tracker - Dashboard</title>
            <div className="grid grid-cols-12 gap-3">
                <Select value={year} onValueChange={(value) => onDateChange(value, 'year')}>
                    <SelectTrigger className='md:col-span-2 col-span-12'>
                        <SelectValue placeholder="Select a year"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Years</SelectLabel>
                            {
                                getPastTenYears()?.map(year => (
                                    <SelectItem key={year}
                                                value={year}>{year}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select value={month} onValueChange={(value) => onDateChange(value, 'month')}>
                    <SelectTrigger className='md:col-span-2 col-span-12'>
                        <SelectValue placeholder="Select a month"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Months</SelectLabel>
                            <SelectItem value='full year'>Full year</SelectItem>
                            {
                                MONTHS?.map(month => (
                                    <SelectItem key={month.name}
                                                value={month.value.toString()}>{month.name}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select disabled={!month} value={week} onValueChange={(value) => onDateChange(value, 'week')}>
                    <SelectTrigger className='md:col-span-2 col-span-12'>
                        <SelectValue placeholder="Select a week"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Weeks</SelectLabel>
                            <SelectItem value='full month'>Full month</SelectItem>
                            {
                                getWeeksInMonth(Number(year), Number(month))?.map(week => (
                                    <SelectItem key={week.text}
                                                value={week.text}>{week.text}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {/*<Button className='md:col-span-2 col-span-12' variant='secondary'*/}
                {/*        onClick={() => refetch()}>Search</Button>*/}
            </div>
            <div className={' p-4'}>
                <p className={'text-sm text-gray-500 font-bold mb-2'}>Total overall</p>
                <h2 className='text-6xl text-red-600 font-bold'>$ {data?.totalAmount}</h2>
            </div>
            {
                data?.totalAmountByDay && data.totalAmountByDay.length > 0 &&
                <div className={'shadow border rounded-sm md:p-5 pt-5 w-full h-[450px]'}>
                    <DateBasedChart yKey='totalAmount' xKey='date' data={data.totalAmountByDay}/>
                </div>
            }
            <div className="grid grid-cols-7 gap-5">
                {
                    data?.totalAmountByCategory && data.totalAmountByCategory.length > 0 &&
                    <div
                        className={'shadow border rounded-sm p-5 w-full h-[500px] flex md:flex-row flex-col mt-5 md:col-span-4 col-span-7'}>
                        <ul>
                            {
                                data.totalAmountByCategory.map(el => (
                                    <li key={el.name} className='flex items-center gap-3 w-full'>
                                        <div style={{backgroundColor: el.color}}
                                             className={`w-[15px] h-[15px] rounded-xl`}></div>
                                        <p className='flex justify-between w-full'> {el.name}: <span
                                            className='text-xl ml-10 font-bold'>{el.value}</span></p>
                                    </li>
                                ))
                            }
                        </ul>
                        <CategoriesChart
                            data={data.totalAmountByCategory}
                            innerRadius={windowSize[0] < BREAKPOINT ? 90 : 140}
                            outerRadius={windowSize[0] < BREAKPOINT ? 120 : 180}
                            cx={windowSize[0] < BREAKPOINT ? 145 : 250}
                            cy={windowSize[0] < BREAKPOINT ? 170 : 230}
                        />
                    </div>
                }
                {
                    data?.totalAmountByPaymentMethod && data.totalAmountByPaymentMethod.length > 0 &&
                    <div className={'shadow border rounded-sm p-5 w-full h-[500px] flex mt-5 md:col-span-3 col-span-7'}>
                        <PaymentMethodsChart data={data.totalAmountByPaymentMethod} xKey='title' yKey='totalAmount'/>
                    </div>
                }
            </div>

        </div>
    );
}
