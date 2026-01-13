import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((item) => {
    const contactName = item.name || "";
    const filterValue = filters || "";

    return contactName.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      {filteredContacts.length ? (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <Contact
              contact={contact}
              key={contact.id}
              onDelete={handleDeleteContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts found</p>
      )}
    </>
  );
}
