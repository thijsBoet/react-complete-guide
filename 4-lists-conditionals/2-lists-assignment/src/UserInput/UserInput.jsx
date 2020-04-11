import React from 'react';

const userInput = (props) => {
  const style = {
    marginTop: '8px',
    border: '2px solid #eee',
    padding: '8px',
    width: '20%',
    textAlign: 'center',
    borderRadius: '25px',
    outline: 'none'
  };
  return (
    <input 
      type="text"
      style={style}
      onChange={props.changed} 
      value={props.currentName}
    />
  )
}

export default userInput