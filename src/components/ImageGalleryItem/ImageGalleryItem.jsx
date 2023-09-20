import PropTypes from 'prop-types';

export const ImageGalleryItem = props => {
  const { webformatURL, largeImageURL, tags, onClick } = props;

  const imageClick = () => {
    onClick({ largeImageURL, webformatURL, tags });
  };

  return (
    <li className="gallery__item" data-url={largeImageURL}>
      <img
        className="gallery__image"
        src={webformatURL}
        alt={tags}
        onClick={imageClick}
        loading="lazy"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
