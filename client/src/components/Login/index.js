import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./style.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onClick={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    {/* <ControlLabel>Email</ControlLabel> */}
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    {/* <ControlLabel>Password</ControlLabel> */}
                    <FormControl
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button>
                    <a href="/auth/google">Sign In with Google</a>
                </Button>
            </form>
        </div>
    );
}
