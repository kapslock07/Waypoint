import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import { MDBBtn } from "mdbreact";


function Profile(props) {
    return (
        <Container fluid>
            <Nav />
            <Row className="mt-4">
                <Col lg={4} className="text-center mb-5">
                    <Row>
                        <Col lg={5}>
                        </Col>
                        <Col lg={7}>
                            <h3>{props.username}</h3>
                            <img className="mt-2 px-auto" src={props.userImage} alt="User" width="188" height="188"></img>
                            <div>
                                <h6 type="button" className="mt-2" style={{ color: "#2096ff" }}><strong>Change Image</strong></h6>
                            </div>
                            <div>
                                <MDBBtn
                                    rounded
                                    type="button"
                                    className="z-depth-1a aqua-gradient mt-5"
                                >
                                    <strong><u> Logout</u></strong>
                                </MDBBtn>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} className="text-center mb-5">
                    <div>
                        <h3>Favorite Consoles</h3>
                        <div className="mt-2">
                            {props.favConsolesImgs.map((favConsoleImg, i) => (
                                <div>
                                    <div className="myConsoles mt-3">
                                        <img className="consoleImg" src={favConsoleImg} alt="platform1" width="100" height="100"></img>
                                        <MDBBtn
                                            rounded
                                            type="button"
                                            className="removeConsoleBtn z-depth-1a aqua-gradient"


                                        >
                                            x
                                    </MDBBtn>
                                    </div>
                                </div>

                            ))}
                        </div>

                    </div>
                </Col>

                <Col lg={4} className="text-center">
                    <Row>

                        <Col lg={7}>
                            <h3>Favorite Games</h3>
                            <div className="myGames mt-2">
                                {props.favGamesImgs.map((favGameImg, i) => (
                                    <div>
                                        <div className="mt-3">
                                            <img className="gameImg" src={favGameImg} alt="platform1" width="100" height="100"></img>
                                            <MDBBtn
                                                rounded
                                                type="button"
                                                className="removeGameBtn z-depth-1a aqua-gradient"


                                            >
                                                x
                                    </MDBBtn>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </Col>
                        <Col lg={5}>
                        </Col>
                    </Row>

                </Col>
            </Row >



        </Container >
    );
}

export default Profile;
