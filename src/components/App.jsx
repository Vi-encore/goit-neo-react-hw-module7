import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts === null) return [];
    return JSON.parse(savedContacts);
  });

  const [searchValue, setSearchValue] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleAdd(newContact) {
    setContacts((prev) => [...prev, newContact]);
  }

  function handleDelete(id) {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAdd} />
      {contacts.length > 0 && (
        <SearchBox searchValue={searchValue} onSearch={setSearchValue} />
      )}
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
