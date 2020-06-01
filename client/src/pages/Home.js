import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProfileSummary from "../components/ProfileSummary";
import Feed from "../components/Feed";
import SearchResults from "../components/SearchResults";
import Trending from "../components/Trending";
import Nav from "../components/Nav";
import { MDBAnimation } from "mdbreact";


function Home(props) {
    return (
        <Container fluid>
            <Nav />
            <div className="homeComponent">
                <Row>
                    <Col lg={3}>
                        <MDBAnimation type="slideInLeft">
                            <ProfileSummary favPlatformsImgs={["https://www.clipartkey.com/mpngs/m/178-1788860_clip-art-logo-ps4-png-ps4-playstation-4.png", "https://tuxbyte.com/wp-content/uploads/2018/01/512px-nintendoswitchlogo-svg-e1516201277674.png"]} favGamesImgs={["https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA17357_00-MLBTHESHOW20STND/1590538852000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP2002-CUSA01163_00-ROCKETLEAGUENA01/1590453522000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7dSK4WGwixhn3M2J40ekgaWs05P2WXnXusL1vLccNFy9EQYhO&usqp=CAU"]} />
                        </MDBAnimation>
                    </Col>
                    <Col lg={6}>
                        {/* <Feed /> */}
                        <SearchResults />
                    </Col>
                    <Col lg={3}>
                        <MDBAnimation type="slideInRight">
                            <Trending />
                        </MDBAnimation>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Home;
