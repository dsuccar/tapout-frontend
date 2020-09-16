import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui inverted brown menu">
      <Link to="/" className="item">
        <h2 className="ui header">
         
          <div className="content">TapOut</div>
          <div className="sub header">Please Drink and Thrive</div>
        </h2>
      </Link>
      <NavLink to="/about" activeClassName="active item" className="item">
        <h3 className="ui header">About</h3>
      </NavLink>
      <NavLink exact to="/" activeClassName="active item" className="item">
        <h3 className="ui header">Home</h3>
      </NavLink>
    </div>
  );
};



export default withRouter(Navbar);
