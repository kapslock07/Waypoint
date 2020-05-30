import React, { state, useState, toggle } from "react";
import Logo from "../assets/images/mainLogo.jpeg"
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact';
import Carousel from "../components/Carousel"
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import axios from "axios"
import Auth from "../utils/Auth";


const Login = () => {

    const [modal, setModal] = useState(false)
    const [signUp, setSignup] = useState({
        userName: "",
        password: "",
        email: ""
    })

    const toggle = () => {
        setModal(!modal);
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setSignup({ ...signUp, [name]: value })

    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("INITIALIZING")
        const userName = signUp.userName;
        const email = signUp.email;
        const password = signUp.password;
        Auth.signUp(email, password, userName)
        toggle();
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
                            <MDBRow className="d-flex justify-content-center">
                                <h3> WayPoint </h3>
                            </MDBRow>
                            <MDBRow className="d-flex justify-content-center">
                                <h3 style={{ paddingTop: "15px", fontFamily: "Nature Spirit Regular" }}> A place where Gamers meet! </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody className="mx-4 mt-4">
                            <MDBInput label="Your email" group type="text" validate />
                            <MDBInput
                                label="Your password"
                                group
                                type="password"
                                validate
                                containerClass="mb-0"
                            />
                            <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                <MDBCol md="5" className="d-flex align-items-start">
                                    <div className="text-center">
                                        <MDBBtn
                                            rounded
                                            type="button"
                                            className="z-depth-2 aqua-gradient"
                                        >
                                            Log in
                                            </MDBBtn>

                                        <a href="http://localhost:3001/auth/google" target="popup" onclick="window.open('http://localhost:3001/auth/google','name','width=600,height=400')">
                                            <MDBBtn> Sign In With Google </MDBBtn>
                                        </a>

                                    </div>
                                </MDBCol>
                                <MDBCol md="7" className="d-flex justify-content-end">
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
                                                                            onChange={handleInputChange}
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
                                                                            onChange={handleInputChange}
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
                                                                            onChange={handleInputChange}
                                                                        />
                                                                    </div>
                                                                    <div className="text-center py-4 mt-3">
                                                                        <MDBBtn color="cyan" type="submit"
                                                                            onClick={handleSubmit}
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

