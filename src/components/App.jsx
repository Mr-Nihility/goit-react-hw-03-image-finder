import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { images } from '../data/data';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    image: '',
  };
  // обробник кліка на картинку
  handlerOpenModal = img => {
    this.setState({ image: img });
  };
  handlerCloseModal = () => {
    this.setState({ image: '' });
  };

  handlerForm = query => {
    console.log(query);
  };

  render() {
    const { image } = this.state;
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
        {/* should be check for render*/}
        <ImageGallery
          imgList={images.hits}
          handlerOpenModal={this.handlerOpenModal}
        />
        {image && <Modal image={image} onClose={this.handlerCloseModal} />}
        {/*без функционала*/}
        <Button />
      </div>
    );
  }
}
