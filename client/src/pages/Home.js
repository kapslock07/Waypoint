import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProfileSummary from "../components/ProfileSummary";
import Feed from "../components/Feed";
import SearchResults from "../components/SearchResults";
import Trending from "../components/Trending";
import Nav from "../components/Nav";
import { MDBAnimation } from "mdbreact";


function Home() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={3}>
                    <MDBAnimation type="slideInLeft">
                        <ProfileSummary />
                    </MDBAnimation>
                </Col>
                <Col xs={6}>
                    {/* <Feed /> */}
                    <SearchResults />
                </Col>
                <Col xs={3}>
                    <MDBAnimation type="slideInRight">
                        <Trending />
                    </MDBAnimation>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
