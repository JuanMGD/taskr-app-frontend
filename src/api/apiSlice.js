import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.1.73:3000",
  }),
  tagTypes: ["Tasks", "Projects", "Teams", "Users"],
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => "/teams",
      providesTags: ["Teams"],
    }),
    createTeam: builder.mutation({
      query: (newTeam) => ({
        url: "/teams",
        method: "POST",
        body: newTeam,
      }),
      invalidatesTags: ["Teams"],
    }),
    getTeam: builder.query({
      query: (id) => `/teams/${id}`,
      providesTags: (result, error, arg) => [{ type: "Teams", id: arg }],
    }),
    editTeam: builder.mutation({
      query: (team) => ({
        url: `/teams/${team.id}`,
        method: "PATCH",
        body: team,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Teams", id: arg.id }],
    }),
    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `/teams/${id}`,
        method: "DELETE",
        // body: id,
      }),
      invalidatesTags: ["Teams"],
    }),
    getProjects: builder.query({
      query: () => "/projects",
      providesTags: ["Projects"],
    }),
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
      // transformResponse: response => response.sort((a, b) => b.id - a.id)
    }),
    createTasks: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTasks: builder.mutation({
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, arg) => [{ type: "Users", id: arg }],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useEditTeamMutation,
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useGetProjectsQuery,
  useGetTasksQuery,
  useCreateTasksMutation,
  useUpdateTasksMutation,
  useDeleteTasksMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
} = apiSlice;
