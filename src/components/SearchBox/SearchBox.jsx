import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contact by name</label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleChange}
      ></input>
    </div>
  );
}
