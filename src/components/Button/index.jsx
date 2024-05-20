import './btn.scss';

const Button = ({ onClick, text, type }) => {
  return (
    <button onClick={onClick} className={type}>
      {text}
    </button>
  );
};

export default Button;
