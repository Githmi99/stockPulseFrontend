import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }), // Base URL points to the backend server
    endpoints: (builder) => ({
        // User authentication endpoints
        signup: builder.mutation({
            query: (user) => ({
                url: "/auth/signup",
                method: "POST",
                body: user,
            }),
        }),

        login: builder.mutation({
            query: (user) => ({
                url: "/auth/signin",
                method: "POST",
                body: user,
            }),
        }),

        // Component-related endpoints
        getComponents: builder.query({
            query: () => "/components",
        }),

        addComponent: builder.mutation({
            query: (component) => ({
                url: "/components",
                method: "POST",
                body: component,
            }),
        }),

        updateComponent: builder.mutation({
            query: ({ id, component }) => ({
                url: `/components/${id}`,
                method: "PUT",
                body: component,
            }),
        }),

        deleteComponent: builder.mutation({
            query: (id) => ({
                url: `/components/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const {
    useSignupMutation,
    useLoginMutation,
    useGetComponentsQuery,
    useAddComponentMutation,
    useUpdateComponentMutation,
    useDeleteComponentMutation,
} = appApi;

export default appApi;
