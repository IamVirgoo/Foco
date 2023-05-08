import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Statistics } from "../slices/statisitcs";
import { Devices } from "../slices/devices";
import User, { authRequest, registerRequest } from "../slices/user";

export const DataMiddleware = createApi({
    reducerPath: "data-middleware",
    baseQuery: fetchBaseQuery({
        baseUrl: ""
    }),
    endpoints: (builder) => ({
        register: builder.query<User, Partial<registerRequest>>({
            query: ({...register}) => ({
                url: "/auth/register",
                method: "POST",
                body: JSON.stringify(register)
            })
        }),
        auth: builder.query<User, Partial<authRequest>>({
            query: ({...auth}) => ({
                url: "/auth/authenticate",
                method: "POST",
                body: JSON.stringify(auth)
            })
        }),
        getStat: builder.query<Statistics, void>({
            query: ()  => ({
                url: "/"
            })
        }),
        getDevices: builder.query<Devices, void>({
            query: () => ({
                url: "/"
            })
        })
    }),
});

export const Register = DataMiddleware.endpoints.register.useQuery;
export const Auth = DataMiddleware.endpoints.auth.useQuery;
export const getStat = DataMiddleware.endpoints.getStat.useQuery;
export const getDevices = DataMiddleware.endpoints.getDevices.useQuery;
