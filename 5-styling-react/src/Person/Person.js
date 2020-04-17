import React, { Component } from "react";
import styled from 'styled-components';


// import './Person.css';
const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border:  1px solid #eee;
  border-radius: 15px;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  '@MediaDeviceInfo(min-width: 500px)' {
  width: '450px'
}`;

const Person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  )
}

export default Person;