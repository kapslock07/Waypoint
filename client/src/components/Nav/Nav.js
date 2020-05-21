import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-4">
            <a className="navbar-brand text-dark" href="#">
                Sweet Logo Here
      </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
            >
                <div className="navbar-nav">
                    <Link
                        to="/"
                        className={
                            location.pathname === "/" ? "nav-link active" : "nav-link"
                        }
                    >
                        Home
                    </Link>
                    <Link
                        to="/saved"
                        className={
                            location.pathname === "/chat" ? "nav-link active" : "nav-link"
                        }
                    >
                        Chat
                    </Link>
                </div>
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input id="dbSearchInput" class="form-control mr-sm-2" type="search" placeholder="Search for a Review"
                    aria-label="Search">
                    <button id="dbSearchButton" class="btn btn-outline-danger my-2 my-sm-0"
                        type="submit">Search</button>
                </input>
            </form>
        </nav>
    );
}

export default Nav;
