import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact contact={contact} />
      ))}
    </ul>
  );
}
