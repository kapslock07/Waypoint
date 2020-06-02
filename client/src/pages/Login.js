import React, { state, useState, toggle, useContext } from "react";
import Logo from "../assets/images/mainLogo.jpeg"
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import Carousel from "../components/Carousel"
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";
// import UserContext from "../utils/UserContext";


const Login = (props) => {

    const [modal, setModal] = useState(false)

    const [signUp, setSignup] = useState({
        userName: "",
        password: "",
        email: ""
    })

    const [login, setLogin] = useState({
        emailLogin: "",
        passwordLogin: ""
    })

    const [loggedIn, setLoggedIn] = useState({
        email: "",
        password: ""
    })

    // const authentication = useContext(UserContext)

    const toggle = () => {
        setModal(!modal);
    }

    const handleInputSignUpChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log('we r typing!!', event.target.value)
        setSignup({ ...signUp, [name]: value })
    }

    const handleLoginChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log('we r typing!!', event.target.value)
        setLogin({ ...login, [name]: value })
    }

    const handleSignUpSubmit = event => {
        event.preventDefault();
        const userName = signUp.userName;
        const email = signUp.email;
        const password = signUp.password;
        Auth.signUp(email, password, userName)
    }

    const handleLogInSubmit = event => {
        event.preventDefault();
        console.log("User logging in")
        Auth.LogIn(loggedIn.email, loggedIn.password)
            .then(res => {
                console.log("Logged in: ", res.data)
                if (res.status === 200) {
                    console.log("Is it 200??")
                    //update state of authentication to true
                    //change window location to where it needs to go
                    props.changeState(true);
                    console.log("After log in, user authentication is ", props.isAuthenticated)
                }
            })
    }

    const handleLoginSubmit = event => {
        event.preventDefault();

        const emailLogin = login.emailLogin;
        const passwordLogin = login.passwordLogin;

        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('IS EMAIL VALID!!', re.test(emailLogin));

        if (re.test(emailLogin) === true && passwordLogin.length > 7) {
            console.log('save to BE!!')
        } else {
            alert('invalid email/pass')
        }

    }

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="6">
                    <Carousel />
                </MDBCol>
                <MDBCol lg="6" style={{ paddingLeft: "50px" }}>
                    <MDBCard>
                        <div className="header pt-3 grey-gradient">
                            <MDBRow className="d-flex justify-content-center">
                                <img src={Logo} style={{ width: "50%", paddingBottom: "15px" }} />
                            </MDBRow>
                            {/* <MDBRow className="d-flex justify-content-center"> */}
                            {/* <h3> WayPoint </h3> */}
                            {/* removed h3 font */}
                            {/*  style={{ fontFamily: "Uni Sans Caps" }} */}
                            {/* </MDBRow> */}
                            <MDBRow className="d-flex justify-content-center mt-5">
                                <h3 style={{ fontFamily: "Uni Sans" }}> A place where Gamers meet! </h3>
                                {/* removed h3 font */}
                                {/*  style={{ fontFamily: "Uni Sans Caps" }} */}
                            </MDBRow>
                        </div>
                        <MDBCardBody className="mx-4 mt-4">
                            <MDBInput name="emailLogin" label="Your email" group type="text" validate className="needs-validation"
                                onChange={handleLoginChange}
                            />
                            <MDBInput
                                label="Your password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                                name="passwordLogin"
                                onChange={handleLoginChange}

                            />
                            <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                <MDBCol md="5" className="d-flex align-items-start">
                                    <div className="text-center">
                                        <MDBBtn
                                            rounded
                                            type="button"
                                            className="z-depth-2 aqua-gradient"
                                            onClick={handleLoginSubmit}
                                        >
                                            Log in
                                            </MDBBtn>
                                    </div>

                                </MDBCol>
                                <MDBCol md="7" className="d-flex justify-content-end p-1">
                                    <div className="text-center">

                                        {/* Removed the following code from this a tag */}
                                        {/* target="popup" onClick={() => window.open('http://localhost:3001/auth/google','name','width=600,height=400')}*/}
                                        {/* This is the logo for Sign in with Google */}
                                        {/* <img src="https://avatars1.githubusercontent.com/u/7328930?v=4" alt="google" height="30" length="30"></img> */}
                                        <a href="http://localhost:3001/auth/google">
                                            <MDBBtn className="z-depth-2 aqua-gradient"><img className="mr-1" src="https://avatars1.githubusercontent.com/u/7328930?v=4" alt="google" height="30" length="30"></img> Sign In With Google </MDBBtn>
                                        </a>

                                    </div>
                                </MDBCol>
                                <MDBCol md="12" className="d-flex justify-content-center">
                                    <p className="font-small grey-text mt-3">
                                        Don't have an account?
                    <a
                                            onClick={toggle}
                                            className="dark-grey-text ml-1 font-weight-bold"
                                        >
                                            Sign up
                    </a>
                                        <MDBModal isOpen={modal} toggle={toggle}>
                                            <MDBModalHeader toggle={toggle}>Sign Up </MDBModalHeader>
                                            <MDBModalBody>
                                                <MDBRow>
                                                    <MDBCol md="12">
                                                        <MDBCard>
                                                            <MDBCardBody>
                                                                <form>
                                                                    <div className="grey-text">
                                                                        <MDBInput
                                                                            label="Your username"
                                                                            icon="user"
                                                                            group
                                                                            type="text"
                                                                            validate
                                                                            error="wrong"
                                                                            success="right"
                                                                            name="userName"
                                                                            onChange={handleInputSignUpChange}
                                                                        />
                                                                        <MDBInput
                                                                            label="Your email"
                                                                            icon="envelope"
                                                                            group
                                                                            type="email"
                                                                            validate
                                                                            error="wrong"
                                                                            success="right"
                                                                            name="email"
                                                                            onChange={handleInputSignUpChange}
                                                                        />
                                                                        <MDBInput
                                                                            label="Confirm your email"
                                                                            icon="exclamation-triangle"
                                                                            group
                                                                            type="text"
                                                                            validate
                                                                            error="wrong"
                                                                            success="right"
                                                                        />
                                                                        <MDBInput
                                                                            label="Your password"
                                                                            icon="lock"
                                                                            group
                                                                            type="password"
                                                                            validate
                                                                            name="password"
                                                                            onChange={handleInputSignUpChange}
                                                                        />
                                                                    </div>
                                                                    <div className="text-center py-4 mt-3">
                                                                        <MDBBtn color="cyan" type="submit"
                                                                            onClick={handleSignUpSubmit}
                                                                        >
                                                                            Register
                  </MDBBtn>
                                                                    </div>
                                                                </form>
                                                            </MDBCardBody>
                                                        </MDBCard>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="primary" onClick={toggle}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    );
};
export default Login;

