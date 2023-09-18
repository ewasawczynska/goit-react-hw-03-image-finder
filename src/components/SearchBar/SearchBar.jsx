import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="searchbar__form">
        <button type="submit" className="searchbar__button">
          <span className="searchbar__button--label">Search</span>
        </button>

        <input
          className="searchbar__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
