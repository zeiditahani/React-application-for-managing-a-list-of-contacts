import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts,removeContact}) => {
  return (
    <ul>
       {contacts.map((contact,index)=>(

       <Contact key={index}>
        <span>{contact.name} : {contact.phone}</span>
       <button onClick={()=>removeContact=(index)}>Remove</button>
       </Contact>
       

       ))}
    </ul>
  )
}

export default ContactList