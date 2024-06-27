import {getDateRangeByMonth} from "@/lib/helpers/date";
import TotalsFilters from "@/components/expenses/TotalsFilters";
import TotalCharts from "@/components/expenses/TotalsCharts";
import {Suspense} from "react";

type Props = {
    searchParams?: { [key: string]: string | string[] | undefined }
}

export default function Page({searchParams}: Props) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const dateFrom = searchParams?.dateFrom ?  new Date(searchParams.dateFrom as string ).toDateString() : getDateRangeByMonth(year, month).from?.toDateString();
    const dateTo = searchParams?.dateTo ? new Date(searchParams.dateTo as string).toDateString() : getDateRangeByMonth(year, month).to?.toDateString();

    console.log(dateFrom, dateTo)
    return (
        <div>
            <TotalsFilters/>
            <div className={'mt-4'}>
                <p className={'text-sm text-gray-500 font-bold mb-2'}>Total overall</p>
            </div>
            <Suspense fallback='Loading...'>
                <TotalCharts dateFrom={dateFrom!} dateTo={dateTo!} />
            </Suspense>
        </div>
    )
}
