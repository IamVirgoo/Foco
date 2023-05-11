import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Statistics } from "../slices/statisitcs";
import { Devices } from "../slices/devices";

export const DataMiddleware = createApi({
    reducerPath: "data-middleware",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:80/data"
    }),
    endpoints: (builder) => ({
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
    })
});

export const getStat = DataMiddleware.endpoints.getStat.useQuery;
export const getDevices = DataMiddleware.endpoints.getDevices.useQuery;