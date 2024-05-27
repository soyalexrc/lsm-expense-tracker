import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {UserSettings} from "@/lib/interfaces/user-settings";

export const userSettingsApi = createApi({
    reducerPath: 'userSettingsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.HOST}),
    endpoints: (builder) => ({
        getUserSettingsByUserId: builder.query<UserSettings, void>({
            query: () => '/api/user-settings/findByUserId'
        })
    })
})

export const {
    useGetUserSettingsByUserIdQuery
} = userSettingsApi
