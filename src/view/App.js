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
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  font-family: 'Shantell Sans', cursive;
`;



