import "./styles.css";

const Navbar = () => {
  return (
    <div className="navbar nav-container bg-primary">
      <div className="container-fluid nav-content">
        <h1 className="nav-logo">MovieFlix</h1>
        <div className="btn-logout">
          <h2>sair</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
