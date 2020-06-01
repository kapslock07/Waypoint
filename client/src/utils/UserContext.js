import React, { useContext, createContext } from 'react';

const UserContext = createContext({
    id: "",
    error: null,
    isAuthenticated: false,
    onClick: () => undefined
});

export default UserContext;