import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProfileSummary from "../components/ProfileSummary";
import Feed from "../components/Feed";
import SearchResults from "../components/SearchResults";
import Trending from "../components/Trending";
import Nav from "../components/Nav";
import { MDBAnimation } from "mdbreact";


function Home(props) {

    const [search, setSearch] = useState({
        game: "",
        platform: "",
        changeState: (game, platform) => setSearch({ ...search, game: game, platform: platform })

    });

    function changeSearch(game) {
        setSearch(game);
    }
    return (
        <Container fluid>
            <Nav changeSearch={changeSearch} changeState={search.changeState} img={props.navImg}/>

            <div className="homeComponent">
                <Row>
                    <Col lg={3}>
                        <MDBAnimation type="slideInLeft">
                            <ProfileSummary favPlatformsImgs={props.userData.platforms} favGamesImgs={props.userData.games} />
                        </MDBAnimation>
                    </Col>
                    <Col lg={6}>
                        {/* <Feed /> */}
                        <SearchResults search={search} />
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