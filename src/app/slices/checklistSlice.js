import {createSlice} from '@reduxjs/toolkit';

export const checklistSlice = createSlice({
name:'task',
initialState: [],
reducers: {
    addTask:(state, action) => 
    {
        state.push(action.payload);
    },

    deleteTask:(state, action) =>
    {
        return state.filter(task => task.id !== action.payload.id)
    }
}
})

export const {addTask, deleteTask} = checklistSlice.actions;

export default checklistSlice.reducer;