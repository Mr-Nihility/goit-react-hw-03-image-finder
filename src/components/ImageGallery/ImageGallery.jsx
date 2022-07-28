// import { Button } from 'components/Button/Button';
// import { Loader } from 'components/Loader/Loader';
// import { Component } from 'react';
import { ImgGallery } from './ImageGallery.styles';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
//-----------------------------------------------------------//

const ImageGallery = ({ imageList, handlerOpenModal }) => {
  return (
    <ImgGallery>
      {imageList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            handlerOpenModal={handlerOpenModal}
          />
        );
      })}
    </ImgGallery>
  );
};

export { ImageGallery };
