import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    CreateExpense,
    Expense,
    GetByUserIdWithFilters,
    GetTotalsResult,
    UpdateExpense
} from "@/lib/interfaces/expense";
// @ts-expect-error No se encuentra el modulo
import {FullTagDescription} from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const expensesApi = createApi({
    reducerPath: 'expenseApi',
    tagTypes: ['Expenses', 'Totals'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.HOST}),
    endpoints: (builder) => ({
        getExpensesByUserId: builder.query<Expense[], GetByUserIdWithFilters>({
            query: (body: GetByUserIdWithFilters) => ({
                url: '/api/expense/findByUserId',
                method: 'POST',
                body
            }),
            providesTags: (result) =>
                result
                    ? // successful query
                    [
                        ...result.map(({_id}) => ({type: 'Expenses', id: _id} as const)),
                        {type: 'Expenses', id: 'LIST'},
                    ]
                    : // an error occurred, but we still want to refetch this query when `{ type: 'Expenses', id: 'LIST' }` is invalidated
                    [{ type: 'Expenses', id: 'LIST' }] as FullTagDescription<never>
        }),
        addExpense: builder.mutation<CreateExpense, Partial<CreateExpense>>({
            query: (body) => ({
                url: '/api/expense',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Expenses' as never, id: 'LIST' }, { type: 'Totals' as never }],
        }),
        updateExpense: builder.mutation<UpdateExpense, Partial<UpdateExpense>>({
            query: (body) => ({
                url: `/api/expense/${body.id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: [{ type: 'Expenses' as never, id: 'LIST' }, { type: 'Totals' as never}],
        }),
        deleteExpense: builder.mutation<UpdateExpense, string>({
            query: (id) => ({
                url: `/api/expense/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: [{ type: 'Expenses' as never, id: 'LIST' }, { type: 'Totals' as never}],
        }),
        getTotals: builder.query<GetTotalsResult, { dateFrom: string; dateTo: string }> ({
            query: (body) => ({
                url: '/api/expense/getTotals',
                method: 'POST',
                body
            }),
            providesTags: () =>  ['Totals'] as FullTagDescription<never>
        })
    })
})

export const {
    useGetExpensesByUserIdQuery,
    useAddExpenseMutation,
    useUpdateExpenseMutation,
    useDeleteExpenseMutation,
    useGetTotalsQuery
} = expensesApi
