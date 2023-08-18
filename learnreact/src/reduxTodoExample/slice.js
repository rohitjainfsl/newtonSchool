import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'todo',
    initialState: {
        input: '',
        tasks: [],
        isEditing: false,
        completedTasks: []
    },
    reducers: {
        setInput: function(state, action){
            state.input = action.payload
        },
        setTasks: function(state, action){
            state.tasks = [...state.tasks, state.input]
            state.input = ""
        },
        handleDelete: function(state, action){
            state.tasks = state.tasks.filter((task, ind) => {return ind !== action.payload})
        },
        handleEdit: function(state, action){},
        handleCheck: function(state, action){
            state.completedTasks = [...state.completedTasks, action.payload]
        }
    }
})

export const {setInput, setTasks, handleDelete, handleEdit, handleCheck} = slice.actions;

export default slice.reducer