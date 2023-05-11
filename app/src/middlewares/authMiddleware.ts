import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Statistics } from "../slices/statisitcs";
import { Devices } from "../slices/devices";
import User, { authRequest, registerRequest } from "../slices/user";

export const AuthMiddleware = createApi({
    reducerPath: "auth-middleware",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:80/auth"
    }),
    endpoints: (builder) => ({
        register: builder.query<User, Partial<registerRequest>>({
            query: ({...register}) => ({
                url: "/register",
                headers : {
                    "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "follow",
                body: JSON.stringify(register)
            })
        }),
        auth: builder.query<User, Partial<authRequest>>({
            query: ({...auth}) => ({
                url: "/authenticate",
                headers : {
                    "Content-Type": "application/json"
                },
                method: "POST",
                redirect: "follow",
                body: JSON.stringify(auth)
            })
        })
    })
});

export const Register = AuthMiddleware.endpoints.register.useQuery;
export const Auth = AuthMiddleware.endpoints.auth.useQuery;

