import IconClose from "../../../shared/icons/IconClose";
import NavigationItem from "../../../shared/typography/NavigationItem";

type Props = {
    open: boolean;
    onClose: () => void;
};

const NavigationMobile = ({ open, onClose }: Props) => {
    const handleOnClick = (item: "close" | "home" | "destination" | "crew" | "technology") => {
        item !== "close" && console.log(`Clicked on ${item}`);
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
            <div style={{ margin: "34px 26.5px 0px 32px" }}>
                <div style={{ width: "195.5px", marginBottom: "49px" }}>
                    <IconClose
                        sx={{ fontSize: "19.09", cursor: "pointer", float: "right" }}
                        onClick={() => handleOnClick("close")}
                        color="tertiary"
                    />
                </div>
                <div style={{ width: "227.5px" }}>
                    <div>
                        <NavigationItem
                            id="home"
                            breakpoint="mobile"
                            prefix="00"
                            item={"Home"}
                            onClick={() => handleOnClick("home")}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <NavigationItem
                            id="home"
                            breakpoint="mobile"
                            prefix="01"
                            item={"Destination"}
                            onClick={() => handleOnClick("destination")}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <NavigationItem
                            id="home"
                            breakpoint="mobile"
                            prefix="02"
                            item={"Crew"}
                            onClick={() => handleOnClick("crew")}
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <NavigationItem
                            id="home"
                            breakpoint="mobile"
                            prefix="03"
                            item={"Technology"}
                            onClick={() => handleOnClick("technology")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationMobile;
