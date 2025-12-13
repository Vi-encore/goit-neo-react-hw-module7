import PropTypes from "prop-types";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <li className={css.item}>
      <div>
        <div className={css["item-field"]}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css["item-field"]}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
}