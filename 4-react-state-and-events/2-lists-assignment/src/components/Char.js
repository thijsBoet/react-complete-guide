import React from 'react';
import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
  padding: 16px 4px;
  text-align: center;
  margin: 16px 4px;
  border: 1px solid black;
`;

export default function Char(props) {
  return (
    <Div onClick={props.clicked}>
      {props.character}
    </Div>
  )
}
