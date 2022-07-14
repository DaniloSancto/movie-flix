import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar nav-container bg-primary">
      <div className="container-fluid nav-content">
        <Link to="/" className="nav-logo">
          <h1>MovieFlix</h1>
        </Link>
        <Link to="/" className="btn-logout">
          <h2>sair</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
