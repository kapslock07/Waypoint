import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from "../components/Nav";


function NoMatch() {
    return (
        <Container fluid>
            <Nav />
            <Row>
                <Col xs={12} className="text-center">
                    <h1>404 Page Not Found</h1>
                    <img className="my-5" src="https://www.digilyfe.co/wp-content/uploads/2018/06/90a309bfe92aebf0add9b46d94f8f4d0-aliens-movie.jpg" alt="NoMatch" ></img>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;
