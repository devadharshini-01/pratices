import React from 'react'

import { Navigate } from "react-router-dom";


export const PrivateRoute = ({isAuthenticated,component }) => {
    return isAuthenticated ? component  : <Navigate to="/" />;
}
