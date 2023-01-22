import { createSlice } from '@reduxjs/toolkit'
export const toDoSlider = createSlice({
  name: 'toDo',
  initialState: {
    todoList:   [
    ]
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
        completed: false
      }
      state.todoList.push(newTodoList);
      console.log(newTodoList)
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => 
          item.id !==action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) => 
        item.id === action.payload.id ? action.payload : item);
    },
    completeTodo: (state, action) => {
      state.todos[action.payload].completed = true;
    }
   },
 })// Action creators are generated for each case reducer function
 export const { addToDo, deleteToDo, editTodo, completeTodo } = toDoSlider.actions
 export default toDoSlider.reducer;