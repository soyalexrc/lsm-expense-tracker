import ExpenseForm from "@/components/expenses/ExpenseForm";
import ExpensesDataTable from "@/components/expenses/table/ExpensesDataTable";
import ExpensesDataFilters from "@/components/expenses/table/ExpensesDataFilters";
import {Metadata} from "next";
import {Suspense} from "react";

export const metadata: Metadata = {
    title: "LSM Expense Tracker | Expenses",
}

export default function ExpensesPage() {
    return (
        <div>
            <ExpensesDataFilters/>
            <div className='flex justify-between items-end my-3'>
                <p className={'text-gray-500 text-sm'}><b>0 </b>registros</p>
                <ExpenseForm data={{_id: 'null'}}/>
            </div>
            <Suspense fallback={'Loading...'}>
                <ExpensesDataTable/>
            </Suspense>
        </div>
    )
}
