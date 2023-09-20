import {
  StyledForm,
  StyledFormButton,
  StyledInput,
  StyledLabel,
} from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value;
    onSubmit(query);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormButton type="submit">
        <StyledLabel>Search</StyledLabel>
      </StyledFormButton>
      <StyledInput
        name="searchQuery"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </StyledForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
