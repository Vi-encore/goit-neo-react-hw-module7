import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, onSearch }) {
  return (
    <div className={css.search}>
      <label htmlFor="search">Find contact by name</label>
      <input
        type="text"
        value={searchValue}
        name="search"
        id="search"
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
}

SearchBox.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
