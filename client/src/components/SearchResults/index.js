import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { MDBAnimation } from "mdbreact";
import Header from "../Header";
import SearchResultsBox from "../SearchResultsBox";
import API from "../../utils/API";


function SearchResults() {

    let [users, setUsers] = React.useState([]); //state for users

    React.useEffect(() => { //grabs users
        loadUsers();
    }, []);


    function loadUsers(){
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

                        { users.length !== 0 ? users.map(e => {
                            return  <SearchResultsBox key={e.id} username={e.userName} image={"https://image.flaticon.com/icons/svg/1880/1880988.svg"} favoriteGames={["Final Fantasy 80", "Uniracers", "Duck Hunt"]} favoriteConsoles={["Xbox 360", "Nintendo Switch"]} />
                        }) : <h1>No Users Found</h1> }
                    </MDBAnimation>
                </Col>
            </Row>
        </Container>


    );


}

export default SearchResults;
