import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

type Props = {};

const Content = (props: Props) => {
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <div>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Content;
