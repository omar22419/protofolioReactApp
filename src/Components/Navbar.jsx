import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav id="Navbar" className="navbar navbar-expand-lg bg-darkBlue py-4 position-sticky z-3 top-0 end-0 start-0">
        <div className="container">
          <Link className="navbar-brand text-uppercase text-white" to="/">
            start framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
              <li className="nav-item fw-bold">
                <NavLink className="nav-link text-white" to="about">
                  about
                </NavLink>
              </li>
              <li className="nav-item fw-bold">
                <NavLink className="nav-link text-white" to="portfolio">
                  Portfolio
                </NavLink>
                
              </li>
                  <li className="nav-item fw-bold">
                  <NavLink className="nav-link text-white" to="contact">
                    Contact
                </NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
