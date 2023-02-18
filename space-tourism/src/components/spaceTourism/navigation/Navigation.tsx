import { useState } from "react";
import IconHamburger from "../../shared/icons/IconHamburger";
import LogoComplete from "../../shared/icons/LogoComplete";
import NavigationHeaderMobile from "./navigationItems/NavigationHeaderMobile";
import NavigationMobile from "./navigationItems/NavigationMobile";

type Props = {};

const Navigation = (props: Props) => {
    return (
        <div
            style={{
                height: "88px",
                width: "100vw",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-between",
                position: "fixed",
                backgroundColor: "#00000033",
            }}
        >
            <NavigationHeaderMobile />
        </div>
    );
};

export default Navigation;
