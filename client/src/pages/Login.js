import React from "react";
import Logo from "../assets/images/samplelogo.jpg"
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import Carousel from "../components/Carousel"

const Login = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol lg="6">
                    <Carousel />
                </MDBCol>
                <MDBCol lg="6">
                    <MDBCard>
                        <div className="header pt-3 grey-gradient">
                            <MDBRow className="d-flex justify-content-center">
                                <img src={Logo} />
                            </MDBRow>
                        </div>
                        <MDBCardBody className="mx-4 mt-4">
                            <MDBRow className="d-flex align-items-center mb-4 mt-5">
                                <MDBCol md="5" className="d-flex align-items-start">
                                    <div className="text-center">
                                        <MDBBtn
                                            rounded
                                            type="button"
                                            className="z-depth-1a aqua-gradient"
                                        >
                                            Log in
                    </MDBBtn>
                                    </div>
                                </MDBCol>
                                <MDBCol md="7" className="d-flex justify-content-end">
                                    <MDBBtn
                                        color="red"
                                        rounded
                                        type="button"
                                        className="z-depth-1a aqua-gradient"
                                    >
                                        Sign Up
                    </MDBBtn>
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

