import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {UserSettings} from "@/lib/interfaces/user-settings";
const BASE_URL = 'http://localhost:3000/api/'

export const userSettingsApi = createApi({
    reducerPath: 'userSettingsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getUserSettingsByUserId: builder.query<UserSettings, void>({
            query: () => 'user-settings/findByUserId'
        })
    })
})

export const {
    useGetUserSettingsByUserIdQuery
} = userSettingsApi
