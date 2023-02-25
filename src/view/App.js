import styled from "styled-components";
import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

function App() {
  return (
    <Div>
      <ListTodo />
      <AddTodo />
    </Div>
  );
}

export default App;

const Div = styled.div`

  margin: auto;
  margin-top: 1.2rem;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  border-radius: 10px;
  background-color: #EDF2FA;
  width: 100%;
  min-height: 75vh; 
  position: relative;
  font-family: 'Shantell Sans', cursive;
  display: flex;
  justify-content: flex-start;

`;



