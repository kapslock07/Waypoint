import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import SampleImg from "../../assets/images/samplelogo.jpg";

import "./style.css";



function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark mb-4 py-4">
            <Navbar.Brand href="#home">
                <img
                    src={SampleImg}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
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
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <form className="form-inline my-2 my-lg-0 mx-auto">
                    <input id="dbSearchInput" className="form-control mr-sm-2" type="search" placeholder="Search For A Game"
                        aria-label="Search">
                    </input>
                    <button id="dbSearchButton" class="btn btn-outline-secondary my-2 my-sm-0"
                        type="submit">Search</button>
                </form>

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
                            location.pathname === "/chats" ? "nav-link active" : "nav-link"
                        }
                    >
                        Chat
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
