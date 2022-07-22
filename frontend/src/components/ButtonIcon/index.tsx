import "./styles.css";

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="button-icon-container">
      <button className="button-icon bg-primary">
        <h2>{text}</h2>
      </button>
    </div>
  );
};

export default ButtonIcon;
