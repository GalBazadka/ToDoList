import styled from "styled-components";
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

function App() {
  return (
    <Div>
      <AddTodo />
      <ListTodo />
    </Div>
  );
}

export default App;

const Div = styled.div`
  margin: auto;
  margin-top: 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 10px;
  background-color: #E5D9B6;
  width: 100%;
  h1 {
    font-size: 2rem;
    font-family: "Griffy", cursive;
    display: flex;
    justify-content: center;
    color: #CCD6A6;
  }
`;



