import "./header.css";
import logoMarvel from "../../assets/svg/logoMarvel.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <Link to="/">
          <img className="marvel-logo" src={logoMarvel} alt="not found" />
        </Link>

        <nav className="nav-pages">
          <Link to="/personnages">
            <span>Personnages</span>
          </Link>
          <Link to="/comics">
            <span>Comics</span>
          </Link>
          <Link to="/favoris">
            <span>Favoris</span>
          </Link>
        </nav>
        <nav>
          <Link to="/login">
            <button>Se Connecter</button>
          </Link>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
