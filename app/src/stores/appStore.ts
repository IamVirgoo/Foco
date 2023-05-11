import { configureStore } from "@reduxjs/toolkit";
import { AuthMiddleware } from "../middlewares/authMiddleware";
import { userReducer } from "../slices/user";
import { devicesReducer } from "../slices/devices";
import { statisticsReducer } from "../slices/statisitcs";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const appStore = configureStore({
    reducer : {
        [AuthMiddleware.reducerPath] : AuthMiddleware.reducer,
        user : userReducer,
        devices : devicesReducer,
        statistic : statisticsReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware()
        .prepend(
            AuthMiddleware.middleware
        )
});

export type AppState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch

// For instant getter'n'setters
export const useAppDispatch: () =>  AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
