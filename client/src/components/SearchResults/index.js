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
    const [state] = useChatContext();
    console.log(state);
    // const { game } = useParams();
    // const { platform } = useParams();
    // console.log({ game, platform });
<<<<<<< HEAD

=======
>>>>>>> 4b2552ab09fb4867fa834a7afb51769646c2bbba

    React.useEffect(() => { //grabs users
        loadGames();
    }, []);


    function loadGames() { //uses API util to loadUsers from our express server
        API.getUsers().then(res => {
            setUsers(res.data);
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
                        {users.length !== 0 ? users.map(e => {
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