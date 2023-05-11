import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export default interface User {
    username? : string
    authenticate? : boolean
};

const initialData : User = {
    username : "Admin",
    authenticate : false
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
        set_user: (state, action : PayloadAction<string>) => {
            state.username = action.payload;
        },
        set_auth: (state, action : PayloadAction<boolean>) => {
            state.authenticate = action.payload;
        }
    }
});

export const userNameState = (state : AppState) => state.user.username;
export const userAuthState = (state : AppState) => state.user.authenticate;

export const {
    set_user,
    set_auth
} = userController.actions;

export const userReducer = userController.reducer;