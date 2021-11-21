import React from 'react'

export default function ValidationComponent(props) {
  return (
    <div>
      {
      props.textLenght <= 5 ? "Text too short" : "Text long enough"
      }
    </div>
  );
}
