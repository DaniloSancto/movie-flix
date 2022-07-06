import BtnLogout from "../BtnLogout";
import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar nav-container bg-primary">
      <div className="container-fluid nav-content">
        <h1 className="nav-logo">MovieFlix</h1>
          <BtnLogout text={"Sair"} />
      </div>
    </div>
  );
};

export default Navbar;
