import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { ImgGallery } from './ImageGallery.styles';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { createRequest } from '../../api/apirequest';

const STATUS = {
  idle: 'idle',
  loading: 'loading',
  error: 'error',
  success: 'success',
};
class ImageGallery extends Component {
  state = {
    imageList: [],
    page: 1,
    status: STATUS.idle,
    totalHits: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: STATUS.loading });
      createRequest(this.props.query)
        .then(res => {
          const { data } = res;
          console.log(res.data);
          this.setState(prevState => ({
            imageList: [...data.hits],
            page: 2,
            totalHits: data.totalHits,
            status: STATUS.success,
          }));
        })
        .catch(() => {
          this.setState({ status: STATUS.error });
        });
    }
  }
  //обробник кнопки "завантажити ще"
  loadMore = () => {
    createRequest(this.props.query, this.state.page).then(res => {
      const { hits } = res.data;

      this.setState(prevState => ({
        imageList: [...prevState.imageList, ...hits],
        page: prevState.page + 1,
      }));
    });
  };

  //рендер
  render() {
    const { imageList, page, totalHits, status, error } = this.state;

    if (status === STATUS.loading) {
      return <Loader />;
    }
    if (status === STATUS.error) {
      return <p>{error}</p>;
    }
    if (status === STATUS.success) {
      return (
        <>
          <ImgGallery>
            {imageList.map(({ id, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  smallImg={webformatURL}
                  largeImg={largeImageURL}
                  handlerOpenModal={this.props.handlerOpenModal}
                />
              );
            })}
          </ImgGallery>
          {totalHits >= 12 * page && <Button onClick={this.loadMore} />}
        </>
      );
    }
  }
}

export { ImageGallery };
