// import styled from "styled-components";
// import { filterTodos } from "../state/toDoSlice";
// import { useDispatch } from "react-redux";

// const AddTodo = () => {
//   const dispatch = useDispatch();
  

//   return (
//     <Filter>
//       <Button currentFilter={currentFilter}
//         id="filterAll"
//         onClick={() => dispatch(filterTodos({ currentFilter: "All" }))}
//       >
//         All
//       </Button>
//       <Button filter={filter}
//         id="filterActive"
//         onClick={() => dispatch(filterTodos({ currentFilter: "Active" }))}
//       >
//         Active
//       </Button>
//       <Button filter={filter}
//         id="filterCompleted"
//         onClick={() => dispatch(filterTodos({ currentFilter: "Completed" }))}
//       >
//         Completed
//       </Button>
//     </Filter>
//   );
// };
// export default AddTodo;

// const Filter = styled.div`
//   position: absolute;
//   bottom: 10px;
//   display: flex;
//   justify-content: center;
//   width: 100%;
// `;

// const Button = styled.div`
//     margin: 0.1rem;
//     border-radius: 5px;
//     background: #ffc3a1;
//     opacity: 0.8;
//     width: 6.5rem;
//     line-height: 2.5rem;
//     font-size: 0.9rem;
//     text-align: center;
//     font-weight: 600;
//     color: ${(props) => (props.filter ? `#B05E27` : `black`)};
//     cursor: pointer;
//     :hover {
//       color: #B05E27;
//     }
// `;
