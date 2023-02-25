import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const mapsApi = createApi({
    reducerPath: 'mapsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:9000/api/' }),
    endpoints: (builder) => ({
        getMaps: builder.query<MapType[], { page: number, userId: string, size: number }>({
            query: ({ page, userId, size }) => ({
                url: '/maps',
                params: {
                    page,
                    userId,
                    size,
                },
                headers: {
                    Authorization: 'Bearer' +
                        ' eyJraWQiOiJiMzAwMzdiYS1hOWM2LTQwODMtYjcxYy02MGEzZWE3MmM1MDgiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzdHJpbmciLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjc3MjY0NDY2LCJzY29wZSI6WyJvcGVuaWQiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDAxL2FwaSIsImV4cCI6MTY3NzI2NDc2NiwiaWF0IjoxNjc3MjY0NDY2fQ.oQzgmup1HIvVlxdf3jA6mweIxYVd8j-2V9103yAFXVz0zRaid-5IuXzSSyGFw4IP3xwPy7whYfh6tC9OnRk6oBELwtqVSOOwWeEKEuhHaNT6yeVFp9yflM0SAfNmXTPfaGvJqSIa_9LYoGYmoZMuvbz0T_UCu3OWmSoswoAb90ZUMtKToxjZ1twjTkHMglArI1tsDLH-lxsDbKr9Z07me7UxYVFsEKI5VO3bjjsqit5g5suaNJXspdrVxLi4Q8WrrBxx5LiY1eDLcQ4LBHeTHCqsxXvAe-nBA35tjsmUYmqequ6gNapqpXXQPLcjcdqZMZ0mgkRinFocfBsDiR4OSw'
                }
            }),
        }),
    }),
})

export const {
    useGetMapsQuery
} = mapsApi

type MapType = {
    "id": number,
    "name": string,
    "description": string
}