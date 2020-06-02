import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import { MDBBtn } from "mdbreact";
import Auth from "../utils/Auth";
import { Redirect } from "react-router-dom";

function Profile(props) {

    const logout = () => {
        Auth.Logout()
            .then(() => {
                props.changeState("isAuthenticated", false)
                return <Redirect to='/' push={true} />
            })
    }

    return (
        <Container fluid>
            <Nav />
            <div className="profileComponent">
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
                                        onClick={logout}
                                    >
                                        <strong><u> Logout</u></strong>
                                    </MDBBtn>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} className="text-center mb-5">
                        <div>
                            <h3>Favorite Platforms</h3>
                            <div className="mt-2">
                                {props.favPlatformsImgs.map((favPlatformImg, i) => (
                                    <div>
                                        <div className="myPlatforms mt-3">
                                            <img className="PlatformImg" src={favPlatformImg} alt="platform1" width="100" height="100"></img>
                                            <MDBBtn
                                                rounded
                                                type="button"
                                                className="removePlatformBtn z-depth-1a aqua-gradient"


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

                            <Col lg={7} className="mb-5">
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
            </div>
        </Container >
    );
}

export default Profile;
