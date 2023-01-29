import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../Reducers/toDoSlice';
import { saveStorage, getInitialState } from "./localStorage.middleware"


export default configureStore({
    reducer: {
        toDo: toDoReducer

    },
    preloadedState: getInitialState(),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), saveStorage]
});

