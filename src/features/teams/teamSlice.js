import { createSlice } from "@reduxjs/toolkit";

  const initialState = [
      {
          id: 1,
          name: "Team A",
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
        },
      {
          id: 2,
          name: "Team B",
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
        },
  ]

export const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        addTeam: (state, action) => {
            state.push(action.payload)
            // return [...state, action.payload]
        },
        editTeam: (state, action) => {
            const { id, title, description } = action.payload

            const foundTeam = state.find(team => team.id === id) 
            if (foundTeam) {
                foundTeam.title = title;
                foundTeam.description = description;
            }

            // return state.map(team => team.id !== id ? team : {...team, title, description})
        },
        deleteTeam: (state, action) => {
            const teamFoundIndex = state.findIndex(team => team.id === action.payload)
            if (teamFoundIndex !== -1) 
                state.splice(teamFoundIndex, 1)
            
            // return state.filter(team => team.id !== action.payload)
        },
    }
})

export const { addTeam, deleteTeam, editTeam } = teamSlice.actions
export default teamSlice.reducer