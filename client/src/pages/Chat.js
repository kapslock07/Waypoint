import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";
import NewChat from "../components/NewChat";

function Chat(props) {
    return (
        <Container fluid>
            <Nav img={props.navImg} />
            <div className="chatComponent">
                <Row style={{ bottom: "60px", position: "relative" }}>
                    <Col xs={12}>
                        <NewChat />
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Chat;
