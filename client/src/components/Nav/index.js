import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Modal, Button, Form } from "react-bootstrap";
import SampleImg from "../../assets/images/mainLogo.jpeg";
import API from "../../utils/API";
import "./style.css";

function Nav() {
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [games, setGames] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    API.getGames().then((res) => {
      console.log(res);
      setGames(res.data);
    });
  }, []);

  return (
    <nav className="navbar fixed-top navbar-expand-lg mb-4 z-depth-2 navbar-light">
      <Navbar.Brand href="/home">
        <img
          src={SampleImg}
          width="75%"
          className="brandLogo d-inline-block align-top ml-5"
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
        {/* <form class="form-inline md-form mb-4 mx-auto">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search For Games" aria-label="Search"></input>
                    <button class="btn aqua-gradient btn-rounded btn-sm my-0 text-light " type="submit"><strong>Search</strong></button>
                </form> */}

        <div className="navbar-nav justify-content-end ml-auto text-light">
          <div className="navBtn">
            <i
              type="button"
              className="fa mx-4 text-center fa-2x fa-search pt-3 animated pulse infinite"
              onClick={handleShow}
            ></i>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Game Search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-inline md-form mb-4 mx-auto justify-content-center">
                <Form.Group controlId="exampleForm.ControlSelect1">
                  {/* <Form.Label>Example select</Form.Label> */}
                  <Form.Control as="select">
                    <option>Game 1</option>
                    <option>Game 2</option>
                    <option>Game 3</option>
                    <option>Game 4</option>
                    <option>Game 5</option>
                    {games.map((game) => (
                      <option>{game.title}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                {/* <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search For Games"
                  aria-label="Search"
                ></input> */}
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="btn aqua-gradient btn-rounded btn-sm my-0 text-light"
                type="submit"
              >
                <strong>Search</strong>
              </button>
            </Modal.Footer>
          </Modal>
          <Link
            style={{ color: "#2096ff" }}
            to="/home"
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }
          >
            <div className="navBtn mx-4 text-center">
              <i className="fa fa-2x fa-gamepad"></i>
              <h5>Home</h5>
            </div>
          </Link>
          <Link
            style={{ color: "#2096ff" }}
            to="/chat"
            className={
              location.pathname === "/chat" ? "nav-link active" : "nav-link"
            }
          >
            <div className="navBtn mx-4 text-center">
              <i className="fa fa-2x fa-comments"></i>
              <h5>Chat</h5>
            </div>
          </Link>
          <Link
            style={{ color: "#2096ff" }}
            to="/profile"
            className={
              location.pathname === "/profile" ? "nav-link active" : "nav-link"
            }
          >
            <div className="navBtn mx-4 text-center">
              {/* <i className="fa fa-2x fa-user-circle d-flex justify-content-center"></i> */}
              <img
                src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg"
                alt="User "
                width="33"
                height="33"
              ></img>

              <h5>Profile </h5>
            </div>
          </Link>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
