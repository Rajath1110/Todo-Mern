import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LuListTodo } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <b><LuListTodo/></b>
          TODO
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/signin">SignIn</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link active" aria-current="page" to="/logout">LogOut</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
