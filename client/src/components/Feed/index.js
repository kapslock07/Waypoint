import React from "react";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";


function Feed() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <h1 className="mb-4 text-center">My Feed</h1>
                    <Card heading={"You Just Added This Game"}>
                        This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    <Card heading={"Chat with John Smith"}>
                        <strong> John:</strong> Let's play team deathmatch at 4pm.
                    </Card>
                    <Card heading={"WinByCamping42 Just Invited You to Chat"}>

                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Feed;
