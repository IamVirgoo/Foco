import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface User {
    userName : string
};

const initialData : User = {
    userName : "Admin"
};

export interface authRequest {
    login : string;
    password : string
}

export interface registerRequest {
    login : string;
    password : string;
    email : string
}

export const userController = createSlice({
    name : "user",
    initialState : initialData,
    reducers : {
        updateUserInfo : (state, action : PayloadAction<User>) => {
            state.userName = action.payload.userName
        }
    }
});

export const {
    updateUserInfo
} = userController.actions;

export const username = (state : AppState) => state.user.userName;

export const userReducer = userController.reducer;