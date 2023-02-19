import { Typography } from "@mui/material";
import { CSSProperties, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import statics from "../../../utils/statics";
import useBreakpoint from "../../../utils/useBreakpoint";
import theme from "../../theme";
import { homeStyles } from "./homeStyles";

const Home = () => {
    const breakpoint = useBreakpoint();
    const windowHeight = useWindowSize().height;

    const [hoverExplore, setHoverExplore] = useState<boolean>(false);

    const isMobile = breakpoint === "mobile";

    const outerContainerHeight = {
        desktop: windowHeight - statics.navigationHeight[breakpoint],
        tablet: windowHeight - 106 - statics.navigationHeight[breakpoint],
        mobile: windowHeight,
    };

    return (
        <div
            style={{
                height: `${outerContainerHeight[breakpoint]}px`,
                ...(homeStyles[breakpoint].outerContainer as CSSProperties),
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    flexWrap: "nowrap",
                    ...(homeStyles[breakpoint].textContainer as CSSProperties),
                }}
            >
                <Typography
                    variant="h5"
                    style={{
                        ...(homeStyles[breakpoint].text.topLable as CSSProperties),
                    }}
                >
                    So, you want to travel to
                </Typography>
                <Typography
                    variant="h1"
                    style={{
                        ...(homeStyles[breakpoint].text.title as CSSProperties),
                    }}
                >
                    Space
                </Typography>
                <Typography
                    variant="body1"
                    style={{
                        ...homeStyles[breakpoint].text.text,
                    }}
                >
                    Let´s face it; if you want to go to space, you might as well genuinely go to outer space and not
                    hover kind of on the edge of it. Well sit back, and relax because we´ll give you a truly out of this
                    world experience!
                </Typography>
            </div>
            <div style={{ height: isMobile ? "300px" : "450px", display: "flex" }}>
                <div
                    onMouseEnter={() => setHoverExplore(true)}
                    onMouseLeave={() => setHoverExplore(false)}
                    style={{
                        margin: "auto",
                        display: "flex",
                        borderRadius: "225px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        cursor: "pointer",
                        boxShadow: `0 0 0 ${hoverExplore ? (isMobile ? "45" : "88") : "0"}px ${
                            theme.palette.primary.main
                        }88`,
                        ...homeStyles[breakpoint].exploreCirle,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: theme.palette.primary.main,
                            ...(homeStyles[breakpoint].text.explore as CSSProperties),
                        }}
                    >
                        Explore
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Home;
