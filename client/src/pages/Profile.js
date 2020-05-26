import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";

function Profile() {
    return (
        <Container fluid>
            <Nav />

            <Row>
                <Col xs={4}>
                </Col>
                <Col xs={4}>
                    <Row>
                        <Col xs={12} className="text-center">
                            <h1>JerryGarcia's Profile</h1>
                            <img className="mt-2 px-auto" src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg" alt="User" width="188" height="188"></img>
                        </Col>
                    </Row >
                    <Row>
                        <Col xs={12}>
                            <div className="mt-5">
                                <span className="mr-5"> Primary Platform: </span>
                                <img src="https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png" alt="platform" width="100" height="100"></img>
                            </div>
                            <h3 className="mt-5">Favorite Games</h3>
                            <div className="mt-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFWPIbG508gT06CyihUonzG1fWZwK6TcMLDfC8YB1mA3t6kCTS&usqp=CAU" alt="game1" width="100" height="100"></img>
                                <span className="ml-3"> Rocket League </span>
                            </div>
                            <div className="mt-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU" alt="game2" width="100" height="100"></img>
                                <span className="ml-3"> Battlefield V </span>
                            </div>
                        </Col>
                    </Row >
                    <Row>
                        <Col xs={12} className="text-center">
                            <button class="logout btn aqua-gradient btn-rounded btn-sm my-5" type="submit"><u><strong>Logout</strong></u></button>
                        </Col>
                    </Row >

                </Col>
                <Col xs={4}>
                </Col>
            </Row >
        </Container >
    );
}

export default Profile;
