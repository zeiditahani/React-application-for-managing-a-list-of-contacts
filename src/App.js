import { useState } from "react";
import AddContactForm from "./comp/AddContactForm";
import ContactList from "./comp/ContactList";

function App() {
  const [contacts, setContacts]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const addContact=(contact)=>{
  setContacts([...contacts, contact])
  };
 
  const removeContact = (index)=>{
    setContacts(contacts.filter((_,index)=>index !== index));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
   <>
   <h1>Contact List</h1>
   <AddContactForm addContact={addContact}/>
   <ContactList contacts={filteredContacts} removeContact={removeContact} />
   </>
  );
}

export default App;
