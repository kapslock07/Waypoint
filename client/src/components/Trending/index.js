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
                        <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Animal_Crossing_New_Horizons.jpg" alt="trending1" width="100" height="100"></img>
                        <p>Animal Crossing</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA17357_00-MLBTHESHOW20STND/1590452727000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending2" width="100" height="100"></img>
                        <p>MLB The Show 20</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA07820_00-THELASTOFUS2STND/1590453969000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending3" width="100" height="100"></img>
                        <p>The Last of Us Part II</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0002-CUSA08829_00-CODMWTHEGAME0001/1590454136000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending3" width="100" height="100"></img>
                        <p>Call of Duty: Modern Warfare</p>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP1001-CUSA16310_00-NBA2K20GOLD00000/1590455129000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000" alt="trending3" width="100" height="100"></img>
                        <p>NBA 2K20</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Trending;
