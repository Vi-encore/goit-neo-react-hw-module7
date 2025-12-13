import css from "./SearchBox.module.css";

export default function SearchBox({ searchValue, onSearch }) {
  return (
    <div className={css.search}>
      <label>Find contact by name</label>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
}
