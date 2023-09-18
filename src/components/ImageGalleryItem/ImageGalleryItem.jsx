import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  const { webformatURL, largeImageURL, tags } = props;

  return (
    <li className="gallery__item">
      <img className="gallery__image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
