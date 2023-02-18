import { Typography } from "@mui/material";
import { useState } from "react";
import getMobileFontSize, { TFontSizeHomeMap } from "../../../utils/mobileTextFontSize";
import useBreakpoint from "../../../utils/useBreakpoint";
import theme from "../../theme";

type THomeProps = {};

const Home = (props: THomeProps) => {
    const breakpoint = useBreakpoint();

    const [hoverExplore, setHoverExplore] = useState<boolean>(false);

    const isMobile = breakpoint === "mobile";
    const isTablet = breakpoint === "tablet";

    return (
        <div>
            <div
                style={{
                    height: "276px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    flexWrap: "nowrap",
                }}
            >
                <Typography variant="h5" {...getMobileFontSize<TFontSizeHomeMap>("home", "topLable")}>
                    So, you want to travel to
                </Typography>
                <Typography variant="h1" {...getMobileFontSize<TFontSizeHomeMap>("home", "title")}>
                    Space
                </Typography>
                <Typography variant="body1" {...getMobileFontSize<TFontSizeHomeMap>("home", "text")}>
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
                        width: isMobile ? "150px" : "274px",
                        height: isMobile ? "150px" : "274px",
                        borderRadius: "225px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "white",
                        boxShadow: `0 0 0 ${hoverExplore ? (isMobile ? "45" : "88") : "0"}px ${
                            theme.palette.primary.main
                        }88`,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            ...getMobileFontSize<TFontSizeHomeMap>("home", "explore").sx,
                            color: theme.palette.primary.main,
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
