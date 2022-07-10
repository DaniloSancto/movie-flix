import { ReactComponent as AuthImage } from "../../assets/images/auth-image.svg";
import Login from "./Login";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="display-none">
        <div className="home-content">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
          <AuthImage />
        </div>
      </div>
      <Login />
    </div>
  );
};

export default Home;
