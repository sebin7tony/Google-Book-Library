import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import {
  HOME_PATH,
  SAVED_BOOKS_PATH,
  GENRE_PATH,
} from "../../constants/RouterConstants";

/*
 If you want to know more about the intergration of Link & NavBar
 https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together
*/

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Google Library
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={HOME_PATH}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={GENRE_PATH}>
            Genre
          </Nav.Link>
          <Nav.Link as={Link} to={SAVED_BOOKS_PATH}>
            Saved Books
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

/* <header>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <strong>Google Library</strong>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/genre">Genre</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link to="/user">User</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header> */
