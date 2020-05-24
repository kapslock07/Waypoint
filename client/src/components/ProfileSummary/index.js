import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";


function ProfileSummary() {
    return (
        <Container fluid>
            <Row >
                <Col size="md-12" >
                    <div className="text-center p-4 profileSummary z-depth-2">
                        <h1 className="mb-4">Profile Summary</h1>
                        <h3>Primary Console</h3>
                        <img src="https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png" alt="User Image" width="100" height="100"></img>
                        <h3 className="mt-5">Games</h3>
                        <div>
                            <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFWPIbG508gT06CyihUonzG1fWZwK6TcMLDfC8YB1mA3t6kCTS&usqp=CAU" alt="User Image" width="100" height="100"></img>
                        </div>
                        <div>
                            <img className="mt-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU" alt="User Image" width="100" height="100"></img>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileSummary;
