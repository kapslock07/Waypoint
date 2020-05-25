import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import Carousel from "../components/Carousel"


export default function Login() {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="12">
                        <Carousel />
                    </MDBCol>
                    {/* <MDBCol md="6"> */}
                    <div>
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn>Login</MDBBtn>
                            </div>
                        </form>
                    </div>
                    {/* </MDBCol> */}
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
