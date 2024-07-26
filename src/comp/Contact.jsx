import React from 'react'

const Contact = ({name, phone,removeContact}) => {
  return (
    <li>
      <span>{name}</span>
      <span>{phone}</span>
      <button onClick={removeContact}></button>
    </li>
  );
};

export default Contact