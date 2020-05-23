import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
import Trending from "../components/Trending";

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-3">
                    <Profile />
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
