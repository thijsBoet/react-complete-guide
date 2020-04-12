import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "white",
      color: "black",
      font: "inherit",
      border: "1px border blue",
      borderRadius: "5px",
      padding: "8px",
      cursor: "pointer",
      outline: "none"
    };

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
      style.backgroundColor= "green";
      style.color = "white"
    }

    return (
      <div className="App">
        <h1>Hi, I'm a real React App</h1>
        <p>This is really working</p>
        <button 
          style={style} 
          onClick={this.togglePersonsHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
