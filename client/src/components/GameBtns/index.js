import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function GameBtns(props) {



    return (
        <div key={game.id} className="mb-3">
            <Form.Check
                type='checkbox'
                id={`default-checkbox`}
                label={game.title}
            />


        </div>

    );
}

export default GameBtns;




