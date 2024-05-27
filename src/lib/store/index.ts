import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '@/lib/store/features/expenses/expensesSlice'
import {expensesApi} from "@/lib/store/services/expenses";
import {setupListeners} from "@reduxjs/toolkit/query";
import {categoriesApi} from "@/lib/store/services/categories";
import {userSettingsApi} from "@/lib/store/services/userSettings";

export const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        [expensesApi.reducerPath]: expensesApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [userSettingsApi.reducerPath]: userSettingsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            categoriesApi.middleware,
            expensesApi.middleware,
            userSettingsApi.middleware,
        ])
})

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
