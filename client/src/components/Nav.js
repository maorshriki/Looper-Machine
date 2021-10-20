import React from "react";
import { Link, withRouter } from "react-router-dom";

const Nav = () => {
  const showNavigate = () => (
    <nav>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <button className="nav-style">
          <Link to="/" aria-current="page" className="link-style">
            Home Page
          </Link>
        </button>
        <button className="nav-style">
          <Link to="/admin" aria-current="page" className="link-style">
            Admin Page
          </Link>
        </button>
      </div>
    </nav>
  );

  return <header id="header">{showNavigate()} </header>;
};

export default withRouter(Nav);
