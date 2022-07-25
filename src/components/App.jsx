import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { createRequest } from '../api/apirequest';

// import '../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export class App extends Component {
  state = {
    image: '',
    query: '',
    isLoading: false,
    error: '',
    imageList: [],
    page: null,
  };
  // обробник кліка на картинку
  handlerOpenModal = img => {
    this.setState({ image: img });
  };
  handlerCloseModal = () => {
    this.setState({ image: '' });
  };

  handlerForm = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      createRequest(this.state.query)
        .then(res => {
          const { hits } = res.data;
          console.log(res.data);
          this.setState(prevState => ({
            imageList: [...hits],
            page: 2,
          }));
        })
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    createRequest(this.state.query, this.state.page).then(res => {
      const { hits } = res.data;

      this.setState(prevState => ({
        imageList: [...prevState.imageList, ...hits],
        page: prevState.page + 1,
      }));
    });
  };

  render() {
    const { image, isLoading, imageList } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr0',

          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handlerForm} />
        {isLoading && <Loader />}
        {!!imageList.length && (
          <>
            <ImageGallery
              imgList={imageList}
              handlerOpenModal={this.handlerOpenModal}
            />

            <Button onClick={this.loadMore} />
          </>
        )}

        {image && <Modal image={image} onClose={this.handlerCloseModal} />}
      </div>
    );
  }
}
