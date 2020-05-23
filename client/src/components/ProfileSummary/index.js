import React from "react";
import { Col, Row, Container } from "../Grid";

function ProfileSummary() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div className="text-center border border-primary">
                        <h1 className="mb-4">Profile Summary</h1>
                        <p>I play on a PS4</p>
                        <p>I play Fortnite</p>
                        <p>I play Portal</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileSummary;
