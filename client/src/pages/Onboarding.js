import React from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
// import API from "../../utils/API";


function Onboarding() {

    // let [games, setGames] = React.useState([]); //state for games
    // let [platforms, setPlatforms] = React.useState([]); //state for platforms
    // let [avatars, setAvatars] = React.useState([]); //state for avatars

    // const handleSubmit = e => {
    //     e.preventDefault();
    // };

    // React.useEffect(() => { //grabs games
    //     loadGames();
    // }, []);


    // function loadGames() { //uses API util to loadGames from our express server
    //     API.getGames().then(res => {
    //         setGames(res.data);
    //     })
    //         .catch(err => console.log(err));
    // }

    return (
        <Container fluid>
            <div className="mt-5">
                <Row>
                    <Col lg={6}>
                        <div className="text-center">
                            <Form>
                                <h3 className="mb-4">Choose Your Favorite Platforms</h3>
                                {['console 1', 'console 2', 'console 3'].map((game) => (
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type='checkbox'
                                            id={`default-checkbox`}
                                            label={game}
                                        />


                                    </div>
                                ))}
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text-center">
                            <Form>
                                <h3 className="mb-4">Choose Your Favorite Games</h3>
                                {['game 1', 'game 2', 'game 3'].map((game) => (
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type='checkbox'
                                            id={`default-checkbox`}
                                            label={game}
                                        />


                                    </div>
                                ))}
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container >
    );
}

export default Onboarding;
