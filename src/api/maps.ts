import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


const mapsApi = createApi({
    reducerPath: 'mapsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'local/api'}),
    endpoints: (builder) => ({
        getMaps: builder.query({
            query: () => ({
                url: '/maps',
            }),
        })
    })
})

export const {
    useGetMaps
} = mapsApi;