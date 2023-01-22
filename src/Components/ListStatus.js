import React, { useState } from "react";
import styled from "styled-components";

const ListStatus = () => {

  return (
    <Div>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Completed</button>
    </Div>
  );
};
export default ListStatus;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;


  button {
    border-radius: 5px;
    background-color: #FFFFFF;
    line-height: 2.5rem;
    font-family: "Griffy", cursive;
    font-size: 1rem;
    padding: 0rem 1rem;
    margin: 0.2rem;
    color: #a4be7b;
    cursor: pointer;
    :hover {
      /* background: #a4be7b; */
      border: 3px solid #5f8d4e;
      /* color: #e5d9b6; */
    }
    :active {
        border: 3px solid #5f8d4e;
        /* color: #e5d9b6; */
    }
  }
`;
