import Typography from "@mui/material/Typography";
import React from "react";
import { mobileFontSize } from "../../../../utils/mobileTextFontSize";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { ICrewMemberContent } from "../crewMember";
import { crewPictureStyle } from "./crewPictureStyle";

type Props = {
    children: JSX.Element;
    crew: ICrewMemberContent | null;
};

const CrewContent = ({ children, crew }: Props) => {
    const breakpoint = useBreakpoint();

    if (crew === null) return <>Not found</>;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "stretch",
                padding: "24px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    borderBottom: `1px solid ${theme.palette.secondary.main}38`,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <img
                    alt={crew.name}
                    src={crew.picture}
                    style={{
                        ...crewPictureStyle()[breakpoint],
                    }}
                />
            </div>
            <div>{children}</div>
            <div style={{ textAlign: "center", margin: "8px auto" }}>
                <Typography variant="h4" style={{ fontSize: mobileFontSize.crew.position, opacity: 0.4951 }}>
                    {crew.position}
                </Typography>
            </div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <Typography variant="h3" style={{ fontSize: mobileFontSize.crew.name }}>
                    {crew.name}
                </Typography>
            </div>
            <div style={{ margin: "auto", textAlign: "center", marginTop: "16px" }}>
                <Typography variant="body1" style={{ fontSize: mobileFontSize.crew.description }}>
                    {crew.description}
                </Typography>
            </div>
        </div>
    );
};

export default CrewContent;
