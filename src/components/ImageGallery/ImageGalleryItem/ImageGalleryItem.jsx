import { ImgGalleryLi, ImgGalleryImg } from '../ImageGallery.styles';

const ImageGalleryItem = ({ smallImg, largeImg, handlerOpenModal }) => {
  return (
    <ImgGalleryLi>
      <ImgGalleryImg
        src={smallImg}
        alt=""
        onClick={() => handlerOpenModal(largeImg)}
      />
    </ImgGalleryLi>
  );
};

export { ImageGalleryItem };
