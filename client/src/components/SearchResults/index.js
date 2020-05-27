import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
import Header from "../Header";
import SearchResultsBox from "../SearchResultsBox";


function SearchResults() {

    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <MDBAnimation type="fadeInDown">
                        <Header name={"Users"} />
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">
                        <SearchResultsBox username={"GoofyName234"} image={"https://lh3.googleusercontent.com/proxy/0_MjqpgUsgMOupXlk8xpqUW3Qq6Tsf-cZYIYhHQExvKQiUbKH3OorCohszz8mxQ-lKKw4Y5-jcsk942tcmnWuOJ0n-hJd9c"} favoriteGames={["Final Fantasy 80", "Uniracers", "Duck Hunt"]} favoriteConsoles={["Xbox 360", "Nintendo Switch"]} />
                        <SearchResultsBox username={"IamMe33"} image={"https://www.nawrb.com/wp-content/uploads/2016/04/user-307993_960_720.png"} favoriteGames={["Donkey Kong Country", "Mario Kart", "Zelda"]} favoriteConsoles={["PC", "Nintendo Switch"]} />
                        <SearchResultsBox username={"JimBob22"} image={"https://www.kodefork.com/static/users/images/user.png"} favoriteGames={["Rocket League", "Madden 20", "Fortnite"]} favoriteConsoles={["Playstation 4", "PC"]} />
                        <SearchResultsBox username={"GoofyName234"} image={"https://lh3.googleusercontent.com/proxy/0_MjqpgUsgMOupXlk8xpqUW3Qq6Tsf-cZYIYhHQExvKQiUbKH3OorCohszz8mxQ-lKKw4Y5-jcsk942tcmnWuOJ0n-hJd9c"} favoriteGames={["Final Fantasy 80", "Uniracers", "Duck Hunt"]} favoriteConsoles={["Xbox 360", "Nintendo Switch"]} />
                        <SearchResultsBox username={"IamMe33"} image={"https://www.nawrb.com/wp-content/uploads/2016/04/user-307993_960_720.png"} favoriteGames={["Donkey Kong Country", "Mario Kart", "Zelda"]} favoriteConsoles={["PC", "Nintendo Switch"]} />
                        <SearchResultsBox username={"JimBob22"} image={"https://www.kodefork.com/static/users/images/user.png"} favoriteGames={["Rocket League", "Madden 20", "Fortnite"]} favoriteConsoles={["Playstation 4", "PC"]} />                </MDBAnimation>
                </Col>
            </Row>
        </Container>


    );


}

export default SearchResults;
