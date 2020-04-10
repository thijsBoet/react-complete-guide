import React, { Component } from "react";
import "./App.css";

// Use Capitalized name, lowercase is reserved for JSX HTML syntax
import Person from "./Person/Person";

class App extends Component {
  state = {
      persons: [
        { name: "Matthijs", age: "38" },
        { name: "Max", age: "28" },
        { name: "Manu", age: "29" },
    ],
    otherState : 'Some other value'
  };

  switchNameHandler = (newName) => {
    // DONT DO THIS: this.state.persons[0].name == 'Maximus Orilius' USE setState
    // setState Takes an object as an argument
    this.setState({ 
      persons: [
        { name: newName, age: "38" },
        { name: "Maximus Aorilius", age: "28" },
        { name: "Manu Manu", age: "29" },
      ],
    })
  };

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
        { name: "Darth Vader", age: "38" },
        { name: event.target.value, age: "28" },
        { name: "Manu Manu", age: "29" },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a real React App</h1>
        <p>This is really working</p>
        {/* Components are reusable and configurable */}
        <button onClick={() => this.switchNameHandler('Pika')}>Switch Names</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Guitar
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
  // Code Above compiles to this React.createElement syntax
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "I'm a React App")
  // );

}

export default App;