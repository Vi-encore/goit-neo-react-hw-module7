import PropTypes from "prop-types";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactOps";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
