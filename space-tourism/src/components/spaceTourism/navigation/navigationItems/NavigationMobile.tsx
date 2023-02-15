import usePathNavigation from "../../../../utils/usePathNavigation";
import IconClose from "../../../shared/icons/IconClose";
import NavigationItem from "../../../shared/typography/NavigationItem";

type Props = {
    open: boolean;
    onClose: () => void;
};

const NavigationMobile = ({ open, onClose }: Props) => {
    const pathNavigation = usePathNavigation();
    const handleOnClick = (item: "close" | "home" | "destination" | "crew" | "technology") => {
        if (item !== "close") {
            pathNavigation.nav(item);
            onClose();
            return;
        }
        onClose();
    };

    return (
        <div
            style={{
                height: "100vh",
                width: open ? "254px" : "0px",
                transition: "width 1s",
                position: "absolute",
                right: 0,
                top: 0,
                backdropFilter: "blur(10px)",
                overflow: "hidden",
            }}
        >
            <div style={{ height: "100vh", margin: "34px 0px 0px 32px" }}>
                <div style={{ height: 19, width: "198px", marginRight: "24px" }}>
                    <div
                        style={{ width: 19, height: 19, cursor: "pointer", float: "right" }}
                        onClick={() => handleOnClick("close")}
                    >
                        <IconClose sx={{ fontSize: "19" }} color="tertiary" />
                    </div>
                </div>
                <div style={{ paddingTop: "49px" }}>
                    <div>
                        <NavigationItem
                            id="home"
                            breakpoint="mobile"
                            prefix="00"
                            item={"Home"}
                            active={pathNavigation.currentRoute === "home"}
                            onClick={() => handleOnClick("home")}
                        />
                    </div>
                    <div>
                        <NavigationItem
                            id="destination"
                            breakpoint="mobile"
                            prefix="01"
                            item={"Destination"}
                            active={pathNavigation.currentRoute === "destination"}
                            onClick={() => handleOnClick("destination")}
                        />
                    </div>
                    <div>
                        <NavigationItem
                            id="crew"
                            breakpoint="mobile"
                            prefix="02"
                            item={"Crew"}
                            active={pathNavigation.currentRoute === "crew"}
                            onClick={() => handleOnClick("crew")}
                        />
                    </div>
                    <div>
                        <NavigationItem
                            id="technology"
                            breakpoint="mobile"
                            prefix="03"
                            item={"Technology"}
                            active={pathNavigation.currentRoute === "technology"}
                            onClick={() => handleOnClick("technology")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMobile;
