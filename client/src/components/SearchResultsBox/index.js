import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ChatBtn from "../ChatBtn";
import "./style.css";

function searchResultsBox(props) {



    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <div className="searchResultsBox z-depth-2 p-2 mb-3">
                        <Row>
                            <Col xs={4} className="text-center">
                                <div>
                                    <h5>{props.username}</h5>
                                    <img src={props.image} alt="User Image" width="25%"></img>
                                </div>
                                <ChatBtn />
                            </Col>
                            <Col xs={4}>
                                <h5><strong>Favorite Consoles</strong></h5>

                                {props.favoriteConsoles.map((console, i) => (
                                    <p>{console}</p>
                                ))}
                            </Col>
                            <Col xs={4}>
                                <h5><strong>Favorite Games</strong></h5>

                                {props.favoriteGames.map((game, i) => (
                                    <p>{game}</p>
                                ))}
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>

        </Container >
    );
}

export default searchResultsBox;
