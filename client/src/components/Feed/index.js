import React from "react";
import { Col, Row, Container } from "../Grid";
import Card from "../Card";
import { MDBAnimation } from "mdbreact";

function Feed() {

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <MDBAnimation type="fadeInDown">
                        <h1 className="mb-4 text-center"><strong><u>My Feed</u></strong></h1>
                    </MDBAnimation>

                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
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
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <Card className="img-fluid" heading={"You Just Added This Game"}>
                            This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                    </MDBAnimation>
                    <Card className="img-fluid" heading={"You Just Added This Game"}>
                        This game is the shit and you will not sleep for the first 3 days that you have it
                    </Card>
                </Col>
            </Row>
        </Container>


    );


}

export default Feed;
