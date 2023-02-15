import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import useBreakpoint from "../../utils/useBreakpoint";
import usePathNavigation from "../../utils/usePathNavigation";

type Props = {};

const Content = (props: Props) => {
    const breakpoint = useBreakpoint();
    const pathNavigation = usePathNavigation();

    const [backgroundUrl, setBackgroundUrl] = useState<string>(pathNavigation.background()[breakpoint]);

    useEffect(
        () => setBackgroundUrl(pathNavigation.background()[breakpoint]),
        [pathNavigation.background()[breakpoint]]
    );

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: "cover",
                transition: "background 0.5",
            }}
        >
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
