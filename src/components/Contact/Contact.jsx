import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from "./Contact.module.css";

export default function Contact({contact: {id, name, number}}) {
  
  return <li>
    <div>
      <div>
        <FaUser />
        <p>{name}</p>
      </div>
      <div>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
    </div>
  </li>;
}
