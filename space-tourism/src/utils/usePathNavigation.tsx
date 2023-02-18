import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import backgroundMobileHome from "/home/background-home-mobile.jpg";
import backgroundTabletHome from "/home/background-home-tablet.jpg";
import backgroundDesktopHome from "/home/background-home-desktop.jpg";

import backgroundMobileCrew from "/crew/background-crew-mobile.jpg";
import backgroundTabletCrew from "/crew/background-crew-tablet.jpg";
import backgroundDesktopCrew from "/crew/background-crew-desktop.jpg";

import backgroundMobileDestination from "/destination/background-destination-mobile.jpg";
import backgroundTabletDestination from "/destination/background-destination-tablet.jpg";
import backgroundDesktopDestination from "/destination/background-destination-desktop.jpg";

import backgroundMobileTechnology from "/technology/background-technology-mobile.jpg";
import backgroundTabletTechnology from "/technology/background-technology-tablet.jpg";
import backgroundDesktopTechnology from "/technology/background-technology-desktop.jpg";

import type { To } from "react-router-dom";

const usePathNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const nav = (to: To) => {
        window.localStorage.setItem("route", to as string);
        navigate(`${to}`);
    };

    const [currentRoute, setCurrentRoute] = useState<string>("");

    const background = () => {
        switch (location.pathname) {
            case "/crew":
                return {
                    mobile: backgroundMobileCrew,
                    tablet: backgroundTabletCrew,
                    desktop: backgroundDesktopCrew,
                };
            case "/destination":
                return {
                    mobile: backgroundMobileDestination,
                    tablet: backgroundTabletDestination,
                    desktop: backgroundDesktopDestination,
                };
            case "/technology":
                return {
                    mobile: backgroundMobileTechnology,
                    tablet: backgroundTabletTechnology,
                    desktop: backgroundDesktopTechnology,
                };
            case "/":
            case "/home":
            default:
                return {
                    mobile: backgroundMobileHome,
                    tablet: backgroundTabletHome,
                    desktop: backgroundDesktopHome,
                };
        }
    };

    useEffect(
        () => setCurrentRoute(() => window.localStorage.getItem("route") ?? "home"),
        [location.pathname, window.localStorage.getItem("route")]
    );

    useEffect(() => console.log(location.pathname, currentRoute), [location.pathname, currentRoute]);

    const pathNavigation = { nav, background, currentRoute };

    return pathNavigation;
};

export default usePathNavigation;
