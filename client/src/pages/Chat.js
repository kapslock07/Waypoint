import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import Messenger from "../components/Messenger"

function Chat() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={12}>
                    <Messenger />
                </Col>
            </Row>
        </Container>
    );
}

export default Chat;
