import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Statistics } from "../slices/statisitcs";

export const DataMiddleware = createApi({
    reducerPath: "data-middleware",
    baseQuery: fetchBaseQuery({
        baseUrl: ""
    }),
    endpoints: (builder) => ({
        getStat: builder.query<Statistics, void>({
            query: ()  => ({
                url: "/"
            })
        }),
    }),
});

export const getStat = DataMiddleware.endpoints.getStat.useQuery;
