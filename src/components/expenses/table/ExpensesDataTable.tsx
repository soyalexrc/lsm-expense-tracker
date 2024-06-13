import {DataTable} from "@/lib/helpers/expenses/datatable";
import {columns} from "@/lib/helpers/expenses/columns";
import ExpenseListMobile from "@/components/expenses/table/ExpensesListMobile";
// import {useGetExpensesByUserIdQuery} from "@/lib/store/services/expenses";

async function getExpensesData() {
    try {
        const data = await fetch('http://localhost:3000/api/expense', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: '',
                categoryId: '',
                paymentMethod: '',
                dateFrom: '',
                dateTo: '',
            })
        })
        return data.json()
    } catch (err) {
        console.log(err)
    }
}

export default async function ExpensesDataTable() {
    const data = await getExpensesData();
    console.log(data);
    // const { data, isLoading, error } = useGetExpensesByUserIdQuery({
    //     title: '',
    //     categoryId: '',
    //     paymentMethod: '',
    //     dateFrom: '',
    //     dateTo:  '',
    // });
    // if (isLoading) return 'Loading...'
    //
    // if (error) return (
    //     <div>
    //         <p>An error has ocurred</p>
    //         <pre>
    //             {
    //                 JSON.stringify(error, null, 2)
    //             }
    //         </pre>
    //     </div>
    // )

    return (
        <>
            <p>hello</p>
            {/*<DataTable columns={columns} data={data ?? []}/>*/}
            {/*<ExpenseListMobile data={data ?? []}/>*/}
        </>
    )
}
