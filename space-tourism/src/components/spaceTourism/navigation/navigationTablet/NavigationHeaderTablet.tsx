import React from "react";
import usePathNavigation from "../../../../utils/usePathNavigation";
import LogoComplete from "../../../shared/icons/LogoComplete";
import NavigationItem from "../../../shared/typography/NavigationItem";

const NavigationHeaderTablet = () => {
    const pathNavigation = usePathNavigation();

    const handleOnClick = (item: "home" | "destination" | "crew" | "technology") => {
        pathNavigation.nav(item);
    };

    return (
        <>
            <LogoComplete logoSize={48} marginLeft={39} />
            <div
                style={{
                    width: "358px",
                    height: "54px",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(40.7742px)",
                    padding: "39px 46px 3px 46px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <NavigationItem
                    breakpoint={"tablet"}
                    id={"home"}
                    item={"Home"}
                    active={pathNavigation.currentRoute === "home" ?? pathNavigation.currentRoute === ""}
                    onClick={() => handleOnClick("home")}
                />
                <NavigationItem
                    breakpoint={"tablet"}
                    id={"destination"}
                    item={"Destination"}
                    active={pathNavigation.currentRoute === "destination"}
                    onClick={() => handleOnClick("destination")}
                />
                <NavigationItem
                    breakpoint={"tablet"}
                    id={"crew"}
                    item={"Crew"}
                    active={pathNavigation.currentRoute === "crew"}
                    onClick={() => handleOnClick("crew")}
                />
                <NavigationItem
                    breakpoint={"tablet"}
                    id={"technology"}
                    item={"Technology"}
                    active={pathNavigation.currentRoute === "technology"}
                    onClick={() => handleOnClick("technology")}
                />
            </div>
        </>
    );
};

export default NavigationHeaderTablet;
