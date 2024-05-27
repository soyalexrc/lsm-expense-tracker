import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Category} from "@/lib/interfaces/expense";

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.HOST}),
    endpoints: (builder) => ({
        getAllCategories: builder.query<Category[], void>({
            query: () => '/api/category'
        })
    })
})

export const {
    useGetAllCategoriesQuery
} = categoriesApi
