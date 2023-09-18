import { Component } from 'react';
import { fetchImagesWithQuery } from 'services/api';
import { Button, ImageGalleryItem } from 'components';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    images: [],
    page: 1,
    totalPages: 0,
    isLoading: false,
    isModalOpen: false,
  };

  render() {
    const { images, page, totalPages, isLoading } = this.state;
    return (
      <ul className="gallery">
        {images.map(({ id, ...rest }) => (
          <ImageGalleryItem key={id} {...rest} />
        ))}
      </ul>
    );
  }
}
