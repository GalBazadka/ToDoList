import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from './Reducers/toDoSlider';
import { saveStorage, getInitialState } from "./state/localStorage.middleware"


export default configureStore({
    reducer: {
        toDo: toDoReducer

    },
    preloadedState: getInitialState(),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), saveStorage]
});

