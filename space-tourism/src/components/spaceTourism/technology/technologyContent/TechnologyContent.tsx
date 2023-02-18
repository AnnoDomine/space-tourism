import Typography from "@mui/material/Typography";
import React from "react";
import { mobileFontSize } from "../../../../utils/mobileTextFontSize";
import useBreakpoint from "../../../../utils/useBreakpoint";
import { ITechnologyContent } from "../technologies";
import { technologyContentStyles } from "./technologyContentStyles";

type Props = {
    children: JSX.Element;
    technologies: ITechnologyContent | null;
};

const TechnologyContent = ({ children, technologies }: Props) => {
    const breakpoint = useBreakpoint();

    if (technologies === null) return <>Not found</>;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "stretch",
                paddingTop: "24px",
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${technologies.picture})`,
                    backgroundSize: "cover",
                    ...technologyContentStyles()[breakpoint],
                    margin: "auto",
                }}
            />
            <div>{children}</div>
            <div
                style={{
                    padding: "24px",
                    margin: "auto",
                    textAlign: "center",
                }}
            >
                <div style={{ margin: "auto", textAlign: "center", marginBottom: "9px" }}>
                    <Typography variant="navigation" style={{ fontSize: mobileFontSize.technology.topLable }}>
                        THE TERMINOLOGY…
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <Typography variant="h3" style={{ fontSize: mobileFontSize.technology.topic }}>
                        {technologies.technology}
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center", marginTop: "16px" }}>
                    <Typography variant="body1" style={{ fontSize: mobileFontSize.technology.description }}>
                        {technologies.description}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default TechnologyContent;
