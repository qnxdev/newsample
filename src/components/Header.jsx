import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "./tippyComponents/input";

function Header({ currentUser }) {
  return (
    <div className="header">
      <div className="header-top">
        <h2>ORG NAME</h2>
        {currentUser.email ? 
        <h4>{currentUser.name}</h4>
        :
        <div className="login-container">
          <Link to="/use-api">
            <Button content="Login here">Login</Button>
          </Link>
          <button>Sign Up</button>
        </div>}
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

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Header);
