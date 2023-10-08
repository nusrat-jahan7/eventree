/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user} = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" state={{from: location}}></Navigate>
    }

    return children;
};

export default PrivateRoute;