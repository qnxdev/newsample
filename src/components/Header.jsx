import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <h2>ORG NAME</h2>
        <div className="login-container">
          <Link to="/login"><button>Login</button></Link>
          <button>Sign Up</button>
        </div>
      </div>
      <nav>
        <Link to="/admin">
          <p className="navitem">Admission</p>
        </Link>
        <Link to="/dept">
          <p className="navitem">Dept</p>
        </Link>
        <Link to="/about">
          <p className="navitem">About</p>
        </Link>
        <Link to="/facilities">
          <p className="navitem">Facilities</p>
        </Link>
      </nav>
    </div>
  );
}
