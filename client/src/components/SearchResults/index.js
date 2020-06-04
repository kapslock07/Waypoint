import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBAnimation } from 'mdbreact';
import Header from '../Header';
import SearchResultsBox from '../SearchResultsBox';
import API from '../../utils/API';
import { useChatContext } from '../../utils/contexts/chatContext';
// import { useParams } from 'react-router-dom';

function SearchResults(props) {
    let [users, setUsers] = React.useState([]); //state for users
    const [results, setResults] = React.useState([])
    const [state] = useChatContext();
    const { game, platform } = props.search;
    console.log(game, platform)



    React.useEffect(() => { //grabs users
        loadGames();
    }, [props.search]);


    function loadGames() { //uses API util to loadUsers from our express server
        API.getUsers().then(res => {
            setUsers(res.data);
            const userQuery = users.filter(user => {
                if (user.games.includes(game) & user.platforms.includes(platform)) {
                    return user
                }
            })
            setResults(userQuery);
        })
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <MDBAnimation type="fadeInDown">
                        <Header name={"Users"} />
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp">

                        {results.length !== 0 ? results.map(e => {
                            if (e.id !== state.user.id && e.onboard === true)
                                return (
                                    <ul>
                                        <SearchResultsBox key={e.id} id={e.id} username={e.userName} image={e.profileImage} favoriteGames={e.games} favoriteConsoles={e.platforms} />
                                    </ul>)
                        }) : users.length !== 0 ? users.map(e => {
                            if (e.id !== state.user.id && e.onboard === true)
                                return (
                                    <ul>
                                        <SearchResultsBox key={e.id} id={e.id} username={e.userName} image={e.profileImage} favoriteGames={e.games} favoriteConsoles={e.platforms} />
                                    </ul>
                                )
                        }) : <h1>No Users Found</h1>}
                    </MDBAnimation>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchResults;