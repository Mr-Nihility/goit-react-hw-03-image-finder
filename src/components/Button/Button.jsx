import { ButtonStyles } from './Button.styles';

const Button = ({ onClick }) => {
  return (
    <ButtonStyles type="button" onClick={onClick}>
      Load more
    </ButtonStyles>
  );
};
export { Button };
