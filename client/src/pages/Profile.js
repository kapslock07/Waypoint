import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import { MDBBtn } from "mdbreact";


function Profile() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={4} className="text-center">
                    <h1>JerryGarcia's Profile</h1>
                    <img className="mt-2 px-auto" src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg" alt="User" width="188" height="188"></img>
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
                        <div className="my-2">
                            <img src="https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png" alt="platform1" width="100" height="100"></img>
                        </div>
                        <div>
                            <img src="https://tuxbyte.com/wp-content/uploads/2018/01/512px-nintendoswitchlogo-svg-e1516201277674.png" alt="platform2" width="100" height="100"></img>
                        </div>

                    </div>
                </Col>

                <Col xs={4} className="text-center">
                    <h3>Favorite Games</h3>
                    <div className="mt-2">
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2002-CUSA01163_00-ROCKETLEAGUENA01/1590453522000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="game1" width="100" height="100"></img>
                    </div>
                    <div className="mt-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU" alt="game2" width="100" height="100"></img>
                    </div>
                </Col>
            </Row >



        </Container >
    );
}

export default Profile;
