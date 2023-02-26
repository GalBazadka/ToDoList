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
    filterTodos: (state , action) => {
      const visFilter = action.payload;
      state.currentFilter = visFilter;
      console.log(visFilter.currentFilter)
      state.todoList.forEach((todo) => {
        switch (visFilter.currentFilter){
          case visFilter.currentFilter = "All":
            document.getElementById('filterAll').style.color= "#B05E27";
            document.getElementById('filterActive').style.color= "black";
            document.getElementById('filterCompleted').style.color= "black";
            todo.show = true;
            break;
            case visFilter.currentFilter = "Active":
            todo.show = todo.completed === false;
            document.getElementById('filterAll').style.color= "black";
            document.getElementById('filterActive').style.color= "#B05E27";
            document.getElementById('filterCompleted').style.color= "black";
            break;
            case visFilter.currentFilter = "Completed":
              todo.show = todo.completed === true;
              document.getElementById('filterAll').style.color= "black";
              document.getElementById('filterActive').style.color= "black";
              document.getElementById('filterCompleted').style.color= "#B05E27";
              break;
              default:
                // do nothing
      }
      });
    },
  
  }
})

export const { addTodo, deleteToDo, checkTodo, filterTodos} = toDoSlider.actions;
export default toDoSlider.reducer;
