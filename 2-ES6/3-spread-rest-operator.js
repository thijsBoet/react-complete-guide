'use strict';

// Spread
const oldArray = [-3, -2, -1, 0];
const newArray = [...oldArray, 1, 2]
console.log(newArray)

const oldObject = {oldProp: 5}
const newObject = {...oldObject, newProp: 6}
console.log(newObject)

// REST used to merge a list of function arguments into an array
const filter = (...args) => {
  return args.filter(el => el === 1)
}
console.log(filter(1, 2, 3))