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
        <div className="nav-item-container">
          <Link to="/admin">
            <p className="navitem">Admission</p>
            <div className="dropdown">
              <Link to="/dept">Link1</Link>
              <Link to="/dept">Link2</Link>
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
            </div>
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/dept">
            <p className="navitem">Dept</p>
            <div className="dropdown">
              <Link to="/dept">Link</Link>
              <Link to="/">Home</Link>
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
            </div>{" "}
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/about">
            <p className="navitem">About</p>
            <div className="dropdown">
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
              <Link to="/login">Login</Link>
            </div>{" "}
          </Link>
        </div>
        <div className="nav-item-container">
          <Link to="/facilities">
            <p className="navitem">Facilities</p>
            <div className="dropdown">
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
              <Link to="/dept">Link</Link>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Header);
