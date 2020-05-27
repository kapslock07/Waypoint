import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../Header";
import Card from "../Card";
import { MDBAnimation } from "mdbreact";

function Feed() {

    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <MDBAnimation type="fadeInDown">
                        <Header name={"My Feed"} />
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Favorited This Game"}>
                            <strong> Rocket League</strong>
                        </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card heading={"Chat with John Smith"}>
                            <strong> John:</strong> Let's play team deathmatch at 4pm.
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">

                        <Card heading={"WinByCamping42 Just Invited You to Chat"}>
                        </Card>
                    </MDBAnimation>

                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Favorited This Game"}>
                        </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card heading={"Chat with John Smith"}>
                            <strong> John:</strong> Let's play team deathmatch at 4pm.
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">

                        <Card heading={"WinByCamping42 Just Invited You to Chat"}>
                        </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Favorited This Game"}>
                        </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card heading={"Chat with John Smith"}>
                            <strong> John:</strong> Let's play team deathmatch at 4pm.
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">

                        <Card heading={"WinByCamping42 Just Invited You to Chat"}>
                        </Card>
                    </MDBAnimation>
                </Col>
            </Row>
        </Container>


    );


}

export default Feed;
