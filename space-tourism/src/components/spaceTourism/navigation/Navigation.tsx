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
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
            }}
        >
            <NavigationHeaderMobile />
        </div>
    );
};

export default Navigation;
