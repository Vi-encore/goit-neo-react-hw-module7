import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <Contact contact={contact} key={contact.id} />
          ))}
        </ul>
      ) : null}
      {isLoading && <p>No contacts found</p>}
    </>
  );
}
