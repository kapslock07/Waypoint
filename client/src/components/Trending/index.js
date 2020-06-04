import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function Trending() {
    return (
        <Container fluid className="trendingContainer">
            <Row>
                <Col xs={12}>
                    <div className="trending text-center p-4 z-depth-2">
                        <h3 className="mb-4"><strong>Trending Games</strong></h3>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1477-CUSA07022_00-FORTNITETESTING1/1591232660000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending1" width="100" height="100"></img>
                        <p>Fortnite</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0002-CUSA01842_00-OWLEGENDARY00000/1591232986000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending2" width="100" height="100"></img>
                        <p>Overwatch</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2002-CUSA01163_00-ROCKETLEAGUENA01/1591232812000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending3" width="100" height="100"></img>
                        <p>Rocket League</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0002-CUSA08829_00-CODWARZONE000001/1591232215000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending3" width="100" height="100"></img>
                        <p>Call of Duty: Warzone</p>
                        <img src="https://www.therendezvous.rocks/wp-content/uploads/2015/06/LolPic.jpg" alt="trending3" width="100" height="100"></img>
                        <p>League of Legends</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Trending;
