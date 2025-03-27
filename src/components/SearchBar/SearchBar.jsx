import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();

    if (trimmed === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(trimmed);
    setSearchTerm("");
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
