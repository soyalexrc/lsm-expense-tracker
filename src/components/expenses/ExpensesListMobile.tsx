'use client';
import {Expense} from "@/lib/interfaces/expense";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Pencil, Trash2} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {format} from "date-fns";
import ExpenseForm from "@/components/expenses/ExpenseForm";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";
import {useState} from "react";

interface Props {
    data: Expense[];
}

export default function ExpenseListMobile({data}: Props) {
    const [page, setPage] = useState<number>(1);
    const pageSize = 10;
    const totalPages = Math.round(data.length / pageSize);

    function getDataPaginated(expenses: Expense[], page: number): Expense[] {
        return expenses.slice((page - 1) * 10, page * 10);
    }

    return (
        <div className={'md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3'}>
            {
                data && getDataPaginated(data, page).map(expense => (
                    <ExpenseForm data={expense} key={expense._id}>
                        <Card>
                            <CardHeader>
                                <div className={'flex justify-between'}>
                                    <p className='font-bold text-4xl text-green-600'>
                                        $ {expense.amount}
                                    </p>
                                    <Badge>{expense.category.title}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent className='relative'>
                                <p className={'font-bold text-xl'}>{expense.title}</p>
                                <p className={'mt-3 pb-3'}>{expense.description}</p>
                                <p className={'text-gray-500 font-bold mt-5 absolute bottom-4 right-4'}>{format(expense.date, 'P')}</p>
                            </CardContent>
                        </Card>
                    </ExpenseForm>
                ))
            }
            <CustomPagination page={page} onChangePage={setPage} totalPages={totalPages}/>
        </div>
    )
}

const CustomPagination = ({page, onChangePage, totalPages}: {page: number, onChangePage: (page: number) => void, totalPages: number}) => {
    return (
        <Pagination className={'mt-5 mb-10'}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={() => page === 1 ? null : onChangePage(page - 1)} href="#" />
                </PaginationItem>
                <PaginationItem className={'mx-5'}>
                    <p><b>{page}</b> of <b>{totalPages}</b></p>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={() => page === totalPages ? null : onChangePage(page + 1)} href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
