import React from "react";

function Header(props) {
    return (
        <h1 className="mb-4 text-center"><strong>{props.name}</strong></h1>
    );
}

export default Header;
