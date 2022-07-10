import "./styles.css";

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => {
  return (
    <div className="button-icon-container bg-primary">
      <h2>{text}</h2>
    </div>
  );
};

export default ButtonIcon;
