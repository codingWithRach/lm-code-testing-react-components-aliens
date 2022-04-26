interface ButtonProps {
  labelText: string;
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ labelText, onClickHandler }) => (
  <>
    <button onClick={(event) => onClickHandler(event)}>{labelText}</button>
  </>
);

export default Button;
