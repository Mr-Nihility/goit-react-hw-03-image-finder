import { ImgGallery } from './ImageGallery.styles';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ imgList, handlerOpenModal }) => {
  return (
    <ImgGallery>
      {imgList.map(({ id, webformatURL, largeImageURL }) => {
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
