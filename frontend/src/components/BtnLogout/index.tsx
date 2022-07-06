import "./styles.css";

type Props = {
  text: string;
};

const BtnLogout = ({ text }: Props) => {
  return (
    <div className="btn-logout">
      <h2>{text}</h2>
    </div>
  );
};

export default BtnLogout;
