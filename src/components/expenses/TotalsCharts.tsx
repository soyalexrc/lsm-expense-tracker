import DateBasedChart from "@/components/expenses/charts/DateBasedChart";
import CategoriesChart from "@/components/expenses/charts/CategoriesChart";
import PaymentMethodsChart from "@/components/expenses/charts/PaymentMethodsChart";
import {currentUser} from "@clerk/nextjs/server";

export default async function TotalCharts({dateFrom, dateTo}: { dateFrom: string, dateTo: string }) {
    const user = await currentUser();
    const data = await fetch(`http://localhost:3000/api/expense/getTotals`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({dateFrom, dateTo, userId: user!.id}),
    }).then(res => res.json());

    return (
        <div>
            <h2 className='text-6xl text-red-600 font-bold'>$ {data?.totalAmount}</h2>
            <p>Trabajando en nuevas graficas...</p>
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
                                data.totalAmountByCategory.map((el: any) => (
                                    <li key={el.name} className='flex items-center gap-3 w-full'>
                                        <span style={{backgroundColor: el.color}} className={`w-[15px] h-[15px] rounded-xl`}></span>
                                        <p className='flex justify-between w-full'> {el.name}:
                                            <span
                                            className='text-xl ml-10 font-bold'>{el.value}</span>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <CategoriesChart
                            data={data.totalAmountByCategory}
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
    )
}
