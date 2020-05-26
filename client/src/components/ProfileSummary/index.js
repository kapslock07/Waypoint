import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";


function ProfileSummary() {
    return (
        <Container fluid>
            <Row >
                <Col xs={12} >
                    <div className="text-center p-4 profileSummary z-depth-2">
                        <h3 className="mb-4"><strong>Profile Summary</strong></h3>
                        <h4>Favorite Consoles</h4>
                        <div className="my-3">
                            <img src="https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png" alt="platform1" width="100" height="100"></img>
                        </div>
                        <div>
                            <img src="https://tuxbyte.com/wp-content/uploads/2018/01/512px-nintendoswitchlogo-svg-e1516201277674.png" alt="platform2" width="100" height="100"></img>
                        </div>
                        <h4 className="mt-5">Favorite Games</h4>
                        <div>
                            <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFWPIbG508gT06CyihUonzG1fWZwK6TcMLDfC8YB1mA3t6kCTS&usqp=CAU" alt="game1" width="100" height="100"></img>
                        </div>
                        <div>
                            <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU" alt="game2" width="100" height="100"></img>
                        </div>
                        <div>
                            <img className="mt-3" src="https://media.playstation.com/is/image/SCEA/mlb-the-show-20-digital-deluxe-edition-store-art-01-ps4-15oct19-en-us?$native_nt$" alt="game3" width="100" height="100"></img>
                        </div>
                        <div>
                            <img className="mt-3" src="https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg" alt="game4" width="100" height="100"></img>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileSummary;
