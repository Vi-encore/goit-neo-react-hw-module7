import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <SearchBox />}
      <ContactList />
    </div>
  );
}

export default App;
