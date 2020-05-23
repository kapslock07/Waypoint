import React from "react";

function Card(props) {
    return (
        <div className="card text-center mb-4">
            <div className="card-header text-dark">
                <h2>{props.heading}</h2>
            </div>
            <div className="card-body text-secondary">{props.children}</div>
        </div>
    );
}

export default Card;
