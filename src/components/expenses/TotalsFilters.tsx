'use client';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {getDateRangeByMonth, getDateRangeByYear, getPastTenYears, getWeeksInMonth, MONTHS} from "@/lib/helpers/date";
import {useState} from "react";
import {DateRange} from "react-day-picker";
import {useSearchParams} from "next/navigation";
import * as sea from "node:sea";

export default function TotalsFilters() {
    const searchParams = useSearchParams();
    const dateInURL = searchParams.get('dateFrom');
    const [year, setYear] = useState<string>(dateInURL ? String(new Date(dateInURL).getFullYear()) : String(new Date().getFullYear()));
    const [month, setMonth] = useState<string>(dateInURL ? String(new Date(dateInURL).getMonth()) : String(new Date().getMonth()));
    const [week, setWeek] = useState<string>('');
    const [date, setDate] = useState<DateRange | undefined>(getDateRangeByMonth(Number(year), Number(month)))

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


    return (
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
    )
}
