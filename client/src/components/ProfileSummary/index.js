import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";


function ProfileSummary(props) {
    return (
        <Container fluid>
            <Row >
                <Col xs={12} className="mb-5" >
                    <div className="text-center p-4 profileSummary z-depth-2">
                        <h3 className="mb-4"><strong>Profile Summary</strong></h3>
                        <h4>Favorite Platforms</h4>
                        <div className="mt-2">
                            {props.favPlatformsImgs.map((favPlatformImg, i) => (
                                <div key={favPlatformImg}>
                                    <div className="myPlatforms mt-3">
                                        <img className="platformImg" src={favPlatformImg} alt="platform1" width="100" height="100"></img>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h4 className="mt-5">Favorite Games</h4>
                        <div className="myGames mt-2">
                            {props.favGamesImgs.map((favGameImg, i) => (
                                <div key={favGameImg}>
                                    <div className="mt-3">
                                        <img className="gameImg" src={favGameImg} alt="platform1" width="100" height="100"></img>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileSummary;
