import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import SampleImg from "../../assets/images/samplelogo.jpg";

import "./style.css";



function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg mb-4 py-4 z-depth-2">
            <Navbar.Brand href="#home">
                <img
                    src={SampleImg}
                    width="100"
                    height="100"
                    className="d-inline-block align-top ml-4"
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
                <form class="form-inline md-form mr-auto mb-4 mx-auto">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search For Games" aria-label="Search"></input>
                    <button class="btn aqua-gradient btn-rounded btn-sm my-0 text-dark" type="submit"><strong>Search</strong></button>
                </form>

                <div className="navbar-nav">
                    <Link
                        to="/home"
                        className={
                            location.pathname === "/home" ? "nav-link active" : "nav-link"
                        }
                    >
                        <div className="mx-4">
                            <i className="fa fa-2x fa-gamepad d-flex justify-content-center"></i>
                            <h5>Home</h5>
                        </div>
                    </Link>
                    <Link
                        to="/chat"
                        className={
                            location.pathname === "/chat" ? "nav-link active" : "nav-link"
                        }

                    >
                        <div className="mx-4">
                            <i className="fa fa-2x fa-comments d-flex justify-content-center"></i>
                            <h5>Chat</h5>
                        </div>
                    </Link>
                    <Link
                        to="/profile"
                        className={
                            location.pathname === "/profile" ? "nav-link active" : "nav-link"
                        }

                    >
                        <div className="mx-4">
                            <i className="fa fa-2x fa-user-circle d-flex justify-content-center"></i>
                            <h5>Profile </h5>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
