import Header from "../../Shared/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer></footer>
        </div>
    );
};

export default LoginLayout;