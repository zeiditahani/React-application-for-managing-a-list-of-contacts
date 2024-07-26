import React, { useState } from 'react'

const AddContactForm = ({addContact}) => {
    const [name, setName]=useState('');
    const [phone, setPhone]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        addContact({ name, phone });
        if(name.trim()){
            //addName(name);
            setName('')
        }
        if(phone.trim()){
            //addPhone(phone);
            setPhone('')
        }
    } 
  return (
 
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Add the name"
        />
        <input
        type="tel"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        placeholder="Add the phone"
        />
        <button type="submit">Add Contact</button>
    </form>
  )
}

export default AddContactForm