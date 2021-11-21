import React, { Component } from "react";
import styled from 'styled-components';

import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  /* Conditional created in StyledButton component => alt={this.state.persons} readout via props.alt */
  background: ${(props) => (props.alt ? "green" : "red")};
  color: white;
  font: inherit;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: lightgreen;
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Matthijs", age: "38" },
      { id: 2, name: "Max", age: "28" },
      { id: 3, name: "Manu", age: "29" },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({ persons : persons});
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>;
          })}
        </div>
      );
    }

    // create variables array for className
    const classes = [];

    // conditional for adding classes
    this.state.persons.length <= 2 
      ? classes.push("red") 
      : classes.push("");
    
    this.state.persons.length <= 1 
      ? classes.push("bold") 
      : classes.push("");

    return (
      <div className="App">
        <h1>Hi, I'm a real React App</h1>
        {/* joins red and bold into a combined string with a space in between */}
        <p className={classes.join(" ")}>This is really working</p>
        <StyledButton 
          alt={this.state.persons} 
          onClick={this.togglePersonsHandler}>
            Show Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
