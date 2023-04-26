import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
            // return [...state, action.payload]
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload

            const foundTask = state.find(task => task.id === id) 
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }

            // return state.map(task => task.id !== id ? task : {...task, title, description})
        },
        deleteTask: (state, action) => {
            const taskFoundIndex = state.findIndex(task => task.id === action.payload)
            if (taskFoundIndex !== -1) 
                state.splice(taskFoundIndex, 1)
            
            // return state.filter(task => task.id !== action.payload)
        },
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer

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
