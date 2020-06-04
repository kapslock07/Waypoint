import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ChatBtn from "../ChatBtn";
import "./style.css";

function searchResultsBox(props) {
    return (
        <li id={props.id}>
            <Container fluid>
                <Row>
                    <Col lg={12}>
                        <div className="searchResultsBox z-depth-2 p-2 mb-3">
                            <Row>
                                <Col lg={4} className="text-center">
                                    <div>
                                        <h5>{props.username}</h5>
                                        <img src={props.image} alt={props.image} width="25%"></img>
                                    </div>
                                    <ChatBtn joineeId={props.id} />
                                </Col>
                                <Col lg={4}>
                                    <h5><strong>Favorite Consoles</strong></h5>

                                    {
                                        props.favoriteConsoles.length !== 0 ? props.favoriteConsoles.map((platform, i) => (
                                            <p key={i}>
                                                {platform.title}
                                            </p>
                                        ))  : <p>No favorite platforms!</p>
                                    }
                                </Col>
                                <Col lg={4}>
                                    <h5><strong>Favorite Games</strong></h5>
                                    {
                                        props.favoriteGames.length !== 0 ?  props.favoriteGames.map((game, i) => (
                                            <p key={i}>{game.title}</p>
                                        )): <p>No favorite games!</p>
                                    }
                                </Col>

                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container >
        </li>
    );
}

export default searchResultsBox;
