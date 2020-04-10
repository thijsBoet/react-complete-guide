import React, { useState } from "react";
import "./App.css";

// Use Capitalized name, lowercase is reserved for JSX HTML syntax
import Person from "./Person/Person";

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: "Matthijs", age: "38" },
        { name: "Max", age: "28" },
        { name: "Manu", age: "29" },
    ],
    otherState : 'Some other value'
  });

  const switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name == 'Maximus Orilius' USE setState
    // setState Takes an object as an argument
    setPersonsState({ 
      persons: [
        { name: "Matthijs Boet", age: "38" },
        { name: "Maximus Aorilius", age: "28" },
        { name: "Manu Manu", age: "29" },
      ],
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a real React App</h1>
      <p>This is really working</p>
      {/* Components are reusable and configurable */}
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My Hobbies: Guitar
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

  // Code Above compiles to this React.createElement syntax
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "I'm a React App")
  // );

}

export default app;