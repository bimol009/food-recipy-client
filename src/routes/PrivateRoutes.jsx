import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation()

    console.log(user)
    console.log("private route working")

    if(loading){
        return (
            <Spinner animation="border" variant="primary" />
          );
    }

    
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;