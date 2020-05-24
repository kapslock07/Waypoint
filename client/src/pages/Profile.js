import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Profile() {
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="text-center">
                        <h1>JerryGarcia's Profile</h1>
                        <img className="mt-2" src="https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2019/07/60698636_DATEBOOK_MER2018100515460770kahn0801.jpg" alt="User Image" width="188" height="188"></img>
                        <div className="mt-5">
                            <span className="mr-5"> Primary Platform: </span>
                            <img src="https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png" alt="User Image" width="100" height="100"></img>
                        </div>
                        <h3 className="mt-5">Favorite Games</h3>
                        <div className="mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFWPIbG508gT06CyihUonzG1fWZwK6TcMLDfC8YB1mA3t6kCTS&usqp=CAU" alt="User Image" width="100" height="100"></img>
                            <span className="mr-3"> Rocket League </span>
                        </div>
                        <div className="mt-2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU" alt="User Image" width="100" height="100"></img>
                            <span className="mr-3"> Battlefield V </span>
                        </div>
                        <button className="logoutButton btn btn-outline-light mt-4"
                            type="submit">Search</button>
                    </div>
                </Col>
            </Row >
        </Container >
    );
}

export default Profile;
