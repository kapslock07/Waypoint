import React from "react";
import { Col, Row, Container } from "../Grid";

function Trending() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <div className="text-center border border-primary">
                        <h1 className="mb-4">Trending Games</h1>
                        <p>Animal Crossing</p>
                        <p>MLB The Show 20</p>
                        <p>Last of Us Part 2</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Trending;
