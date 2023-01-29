import { createSlice, current } from "@reduxjs/toolkit";

export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [],
    currentFilter: "All",
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: Math.round(Math.random() * 1000000),
        content: action.payload.newContent,
        completed: false,
        show: true,
      };
      state.todoList.push(newTodoList);
      console.log(current(state));
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
      console.log(current(state))
    },
    checkTodo: (state, action) => {
      const index = state.todoList.findIndex((todo) => todo.id === action.payload.id);
      state.todoList[index].completed = !state.todoList[index].completed;
      console.log(current(state))
    },
    showCompleted: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.completed === true);
      console.log(current(state))
    },
    showActive: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.completed === false);
      console.log(current(state))
    },
    showAll: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.show === false || true );
      console.log(current(state))
    },    
  }
})

export const { addTodo, deleteToDo, checkTodo ,showAll, showActive, showCompleted} = toDoSlider.actions;
export default toDoSlider.reducer;
