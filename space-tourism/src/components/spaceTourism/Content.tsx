import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import useBreakpoint from "../../utils/useBreakpoint";
import usePathNavigation from "../../utils/usePathNavigation";
import { useWindowSize } from "usehooks-ts";
import statics from "../../utils/statics";

type Props = {};

const Content = (props: Props) => {
    const breakpoint = useBreakpoint();
    const pathNavigation = usePathNavigation();
    const windowHeight = useWindowSize().height;

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
                overflow: "auto",
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: "cover",
                transition: "background 0.5",
            }}
        >
            <div style={{ height: `${statics.navigationHeight}px` }}>
                <Navigation />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Content;
