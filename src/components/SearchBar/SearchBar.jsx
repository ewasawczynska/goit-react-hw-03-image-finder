import PropTypes from 'prop-types';
import { SearchForm } from 'components';
import { StyledHeader } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = query => {
    onSubmit(query);
  };

  return (
    <StyledHeader>
      <SearchForm onSubmit={handleSubmit} />
    </StyledHeader>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
