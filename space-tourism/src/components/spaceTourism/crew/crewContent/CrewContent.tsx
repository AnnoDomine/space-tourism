import Typography from "@mui/material/Typography";
import React, { CSSProperties, useEffect } from "react";
import { useWindowSize } from "usehooks-ts";
import { ROUTES } from "../../../../utils/routes";
import setHeaderTitle from "../../../../utils/setHeaderTitle";
import statics from "../../../../utils/statics";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { ICrewMemberContent } from "../crewMember";
import { crewContentStyle } from "./crewContentStyle";

type Props = {
    children: JSX.Element;
    crew: ICrewMemberContent | null;
};

const CrewContent = ({ children, crew }: Props) => {
    const breakpoint = useBreakpoint();
    const windowHeight = useWindowSize().height;

    useEffect(() => setHeaderTitle("Crew", crew?.name || ""));

    const tabletTextContentPadding: Record<ICrewMemberContent["route"], CSSProperties> = {
        [ROUTES.crew.douglasHurley]: {
            padding: "0px 95px",
        },
        [ROUTES.crew.markShuttleworth]: {
            padding: "0px 64px",
        },
        [ROUTES.crew.victorGlover]: {
            padding: "0px 28px",
        },
        [ROUTES.crew.anoushehAnsari]: {
            padding: "0px 56px",
        },
    };

    const containerHeight = {
        desktop: windowHeight - 24 - 40 - statics.navigationHeight[breakpoint],
        tablet: windowHeight - 24 - 40 - 60 - statics.navigationHeight[breakpoint],
        mobile: windowHeight,
    };

    if (crew === null) return <>Not found</>;
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "stretch",
                maxHeight: `${containerHeight[breakpoint]}px`,
                ...(crewContentStyle[breakpoint].container as CSSProperties),
            }}
        >
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    ...(breakpoint === "mobile" && { borderBottom: `1px solid ${theme.palette.secondary.main}38` }),
                }}
            >
                <img
                    alt={crew.name}
                    src={crew.picture}
                    style={{
                        ...crewContentStyle[breakpoint].image,
                    }}
                />
            </div>
            {breakpoint !== "desktop" && <div>{children}</div>}
            <div style={{ ...(breakpoint !== "mobile" && tabletTextContentPadding[crew.route]) }}>
                <div style={{ textAlign: "center", marginBottom: "8px" }}>
                    <Typography variant="h4" style={{ opacity: 0.4951, ...crewContentStyle[breakpoint].text.position }}>
                        {crew.position}
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <Typography variant="h3" style={{ ...crewContentStyle[breakpoint].text.name }}>
                        {crew.name}
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center", marginTop: "16px" }}>
                    <Typography
                        variant="body1"
                        style={{ ...(crewContentStyle[breakpoint].text.description as CSSProperties) }}
                    >
                        {crew.description}
                    </Typography>
                </div>
                {breakpoint === "desktop" && <div>{children}</div>}
            </div>
        </div>
    );
};

export default CrewContent;
