import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Category} from "@/lib/interfaces/expense";
const BASE_URL = 'http://localhost:3000/api/'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getAllCategories: builder.query<Category[], void>({
            query: () => 'category'
        })
    })
})

export const {
    useGetAllCategoriesQuery
} = categoriesApi
