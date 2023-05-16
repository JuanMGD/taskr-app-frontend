import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe, impedit accusamus delectus vero architecto excepturi blanditiis corrupti nesciunt nih rutrum mollis libero, at aliquam mauris laoreet quis. Phasellus eget enim.",
    completed: true,
    notes: "Se requiere el siguiente material: \nCables \nLeds",
    // project_name: 'Project 1',
    project_id: 1,
    assignedTo: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    // date: ''
  },
  {
    id: 2,
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
    notes: "",
    // project_name: 'Project 1',
    project_id: 1,
    assignedTo: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    // date: ''
  },
  {
    id: 3,
    title: "Task 3",
    description: "Task 3 description",
    completed: true,
    notes: "",
    project_name: 'Project 2',
    project_id: 2,
    assignedTo: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    // date: ''
  },
  {
    id: 4,
    title: "Desarrollo de la estructura de la base de datos",
    description: "Task 4 description",
    completed: false,
    notes: "",
    project_name: 'Project 2',
    project_id: 2,
    assignedTo: {
      id: 1,
      name: "Nombre usuario",
      email: "usuario@taskr.com",
    },
    // date: ''
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      // return [...state, action.payload]
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }

      // return state.map(task => task.id !== id ? task : {...task, title, description})
    },
    deleteTask: (state, action) => {
      const taskFoundIndex = state.findIndex(
        (task) => task.id === action.payload
      );
      if (taskFoundIndex !== -1) state.splice(taskFoundIndex, 1);

      // return state.filter(task => task.id !== action.payload)
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;

// Función propia para tratar de comprender cómo funciona createSlice y useDispatch
// const crearSlice = (/* sliceParameters */) => {
//     const sliceParameters = {
//         name: "Tareas",
//         initialState: [],
//         reducers: {
//             fn1: (estado, action)=>{
//                 // should return the state
//                 state.push(1)
//                 // return estado
//             },
//             fn2: (estado, action)=>{},
//             fn3: (estado, action)=>{},
//         }
//     }

//     const [state, setState] = useState(sliceParameters.initialState)

//     const slice = {
//         name: sliceParameters.name,
//         actions: {},
//         dispatch: (nuevoState) => {
//             if(nuevoState)
//                 setState(nuevoState)
//             else
//                 setState(state)
//         }
//     }

//     Object.keys(sliceParameters.reducers).forEach(fn => {
//     // for(fn in sliceParameters.reducers) {
//         slice.actions[fn] = (payload) => sliceParameters[fn](
//             state,
//             {
//                 type: `${sliceParameters.name}/${fn}`,
//                 payload
//             }
//         )
//     }
//     )

//     return slice;
// }
