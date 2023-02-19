import useBreakpoint from "../../../utils/useBreakpoint";
import NavigationHeaderMobile from "./navigationMobile/NavigationHeaderMobile";
import { navigationStyles } from "./navigationStyles";
import NavigationHeaderTablet from "./navigationTablet/NavigationHeaderTablet";

const Navigation = () => {
    const breakpoint = useBreakpoint();

    return (
        <div
            style={{
                width: "100vw",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-between",
                position: "fixed",
                alignItems: "center",
                ...navigationStyles[breakpoint],
            }}
        >
            {breakpoint === "mobile" && <NavigationHeaderMobile />}
            {breakpoint === "tablet" && <NavigationHeaderTablet />}
            {breakpoint === "desktop" && <NavigationHeaderTablet />}
        </div>
    );
};

export default Navigation;
