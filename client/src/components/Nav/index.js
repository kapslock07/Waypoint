import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Navbar, Modal, Form, Image } from "react-bootstrap";
import SampleImg from "../../assets/images/mainLogo.jpeg";
import API from "../../utils/API";
import "./style.css";

function Nav() {
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [games, setGames] = useState([]);
  // let [platforms, setPlatforms] = React.useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => { //grabs games
    loadGames();
    // loadPlatforms();
  }, []);

  function loadGames() { //uses API util to loadGames from our express server
    API.getGames().then(res => {
      setGames(res.data);
      console.log(res.data)
    })
      .catch(err => console.log(err));
  }

  // function loadPlatforms() { //uses API util to loadGames from our express server
  //   API.getPlatforms().then(res => {
  //     setPlatforms(res.data);
  //     console.log(res.data)
  //   })
  //     .catch(err => console.log(err));
  // }

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
          <div className="navBtn text-center mb-3">
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
                <Container>
                  <Row>
                    <Col lg={12}>
                      <h5 className="mb-2">Choose A Game</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Form>
                        <Form.Group controlId="gameSearchForm.ControlSelect1">
                          <Form.Control as="select">
                            {games.map((game, i) => (
                              <option key={game.id}>{game.title}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      {/* <div>
                        <h5 className="mb-2 mt-4">Choose A Platform</h5>
                        {platforms.map((platform, i) => (
                          <div key={i} className="mb-3 mx-4 platformOptions justify-content-center">
                            <Image src={platform.src} thumbnail width="100" height="100" />
                            <Form.Check
                              type='radio'
                              id={platform.id}
                              label={platform.name}
                            />

                          </div>
                        ))}

                      </div> */}
                    </Col>

                  </Row>
                </Container>
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
      </div >
    </nav >
  );
}

export default Nav;
