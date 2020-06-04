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
    //console.log(state);
    const { game, platform } = props.search;
    console.log(game, platform)


    React.useEffect(() => { //grabs users
        loadGames();
    }, [props.search]);


    function loadGames() { //uses API util to loadUsers from our express server
        API.getUsers().then(res => {
            console.log("The user data being returned from server is ", res.data)
            setUsers(res.data);
            const userQuery = users.filter(user => {
                console.log("IS USER MAP INTO RESULTS FIRING?")
                if (user.games.includes(game) & user.platforms.includes(platform)) {
                    console.log("AM I ADDING A USER TO RESULTS?")
                    console.log("I AM ADDING ", user)
                    return user
                }
            })
            console.log(userQuery);
            setResults(userQuery);
            console.log("The state of results is ", results)
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
                            console.log("Inside result is ", e)
                            console.log("Inside state.user is ", state.user)
                            if (e.id !== state.user.id)
                                return (
                                    <ul>
                                        <SearchResultsBox key={e.id} id={e.id} username={e.userName} image={e.profileImage} favoriteGames={e.games} favoriteConsoles={e.platforms} />
                                    </ul>)
                        }) : users.length !== 0 ? users.map(e => {
                            if (e.id !== state.user.id)
                                return <SearchResultsBox key={e.id} id={e.id} username={e.userName} image={e.profileImage} favoriteGames={e.games} favoriteConsoles={e.platforms} />
                        }) : <h1>No Users Found</h1>}
                    </MDBAnimation>
                </Col>
            </Row>
        </Container>
    );
}

export default SearchResults;