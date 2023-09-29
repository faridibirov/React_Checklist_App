import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice';
import checklistReducer from './slices/checklistSlice';

export default configureStore({
  reducer: {
    counterReducer,
    checklistReducer,
  },

})