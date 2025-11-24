import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MainLayout() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <a className="navbar-brand" href="/">My App</a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/login">
              Login |
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white fw-bold" to="/register">
              Registration
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default MainLayout;
