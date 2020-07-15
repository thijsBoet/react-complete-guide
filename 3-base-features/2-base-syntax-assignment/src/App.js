import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // asssigned to destructured variables
  // this.state is now personState
  // setPersonState lets use change state
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
  // Instead this.setState use the destructured SetPersonState
    setPersonsState({
      persons: [
        { name: newName, age: 40 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  const nameChangeHandler = e => {
    e.preventDefault();
    const value = e.target.value;
    setPersonsState({
      persons: [
        { name: "Max", age: 40 },
        { name: value, age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  }
  
  // SetPersonState deletes/replaces old state, make sure to copy all future necessary STATE data
  const [ otherState, setOtherState ] = useState('some other value');

  const style = {
    backgroundColor : "white",
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Can pas arguments through function by converting it to an arrow function */}
        <button 
          style={style}
          onClick={() => switchNameHandler("matthijs")}>
          Switch Name
        </button>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          // Can pass function directly without this. because it is no longer a class, but a function with hooks
          click={switchNameHandler.bind(this, "Matthijs")}
          changed={nameChangeHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));

  // state = {
  //   persons: [
  //     { name: 'Max', age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value'
  // };

  // switchNameHandler = () => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: 'Maximilian', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };
}

export default app;
