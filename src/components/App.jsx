import { Component } from 'react';
import Modal from './components/Modal';

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

  render() {
    const { image } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {image && <Modal image={image} onClose={handlerCloseModal} />}
      </div>
    );
  }
}
