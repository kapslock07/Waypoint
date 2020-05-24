import React from "react";
import { Col, Row, Container } from "../components/Grid";
import ProfileSummary from "../components/ProfileSummary";
import Feed from "../components/Feed";
import Trending from "../components/Trending";
import Nav from "../components/Nav";

function Home() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col size="md-3">
                    <ProfileSummary />
                </Col>
                <Col size="md-6">
                    <Feed />
                </Col>
                <Col size="md-3">
                    <Trending />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
