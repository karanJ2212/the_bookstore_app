import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <a className="nav-brand" href="#/">
          Bookstore CMS
        </a>
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/" aria-current="page">
              BOOKS
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/Category">
              CATEGORIES
            </Link>
          </li>
        </ul>
        <button className="avatar-btn" type="button">
          <span className="material-icons">person</span>
        </button>
      </nav>
    </div>
  );
}
