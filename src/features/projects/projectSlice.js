import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Project 1",
    description:
      "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, impedit accusamus delectus vero architecto excepturi blanditiis corrupti nesciunt nih rutrum mollis libero, at aliquam mauris laoreet quis. Phasellus eget enim.",
    leader: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    members: [
      {
        id: 1,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 2,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 3,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 4,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 5,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
    ],
    team_id: 1,
    progress: 70,
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "Unlock powerfull time-saving tools for creating email delivery and collecting marketing data",
    // description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, impedit accusamus delectus vero architecto excepturi blanditiis corrupti nesciunt nih rutrum mollis libero, at aliquam mauris laoreet quis. Phasellus eget enim.",
    leader: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    members: [
      {
        id: 1,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 2,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
      {
        id: 3,
        name: "Nombre usuario",
        email: "usuario@taskr.com",
      },
    ],
    team_id: 2,
    progress: 90,
  },
];

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push(action.payload);
      // return [...state, action.payload]
    },
    editProject: (state, action) => {
      const { id, title, description } = action.payload;

      const foundProject = state.find((project) => project.id === id);
      if (foundProject) {
        foundProject.title = title;
        foundProject.description = description;
      }

      // return state.map(project => project.id !== id ? project : {...project, title, description})
    },
    deleteProject: (state, action) => {
      const projectFoundIndex = state.findIndex(
        (project) => project.id === action.payload
      );
      if (projectFoundIndex !== -1) state.splice(projectFoundIndex, 1);

      // return state.filter(project => project.id !== action.payload)
    },
  },
});

export const { addProject, deleteProject, editProject } = projectSlice.actions;
export default projectSlice.reducer;
