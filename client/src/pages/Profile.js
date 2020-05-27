import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import { MDBBtn } from "mdbreact";


function Profile(props) {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={4} className="text-center">
                    <h1>{props.username}'s Profile</h1>
                    <img className="mt-2 px-auto" src={props.userImage} alt="User" width="188" height="188"></img>
                    <div>
                        <MDBBtn
                            rounded
                            type="button"
                            className="z-depth-1a aqua-gradient mt-4"
                        >
                            Logout
                    </MDBBtn>
                    </div>
                </Col>
                <Col xs={4} className="text-center">
                    <div>
                        <h3>Favorite Consoles</h3>
                        <div className="mt-2">
                            {props.favConsolesImgs.map((favConsoleImg, i) => (
                                <div className="mt-3">
                                    <img src={favConsoleImg} alt="platform1" width="100" height="100"></img>
                                </div>

                            ))}
                        </div>

                    </div>
                </Col>

                <Col xs={4} className="text-center">
                    <h3>Favorite Games</h3>
                    <div className="mt-2">
                        {props.favGamesImgs.map((favGameImg, i) => (
                            <div className="mt-3">
                                <img src={favGameImg} alt="platform1" width="100" height="100"></img>
                            </div>

                        ))}
                    </div>

                </Col>
            </Row >



        </Container >
    );
}

export default Profile;
