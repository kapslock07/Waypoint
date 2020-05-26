import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card text-center mb-4">
            <div className="card-header text-dark">
                <h2>{props.heading}</h2>
            </div>
            <p className="card-body">{props.children}</p>
        </div>
    );
}

export default Card;
