import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onChangeQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (!query) {
      toast.error("Please enter text to search for image", {
        position: "top-center",
        duration: 5000,
      });
      return;
    }
    onChangeQuery(query);
  };

  return (
    <header className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
