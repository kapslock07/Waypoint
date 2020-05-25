import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ProfileSummary from "../components/ProfileSummary";
import Feed from "../components/Feed";
import Trending from "../components/Trending";
import Nav from "../components/Nav";

function Home() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={3}>
                    <ProfileSummary />
                </Col>
                <Col xs={6}>
                    <Feed />
                </Col>
                <Col xs={3}>
                    <Trending />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
