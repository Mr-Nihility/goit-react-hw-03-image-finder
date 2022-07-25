import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onTap);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onTap);
  }

  onTap = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, onClose } = this.props;
    return (
      <div>
        <button onClick={onClose}>X</button>

        <div>
          <img src={image} />
          ``
        </div>
      </div>
    );
  }
}

export { Modal };
