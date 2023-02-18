import { Divider, Typography } from "@mui/material";
import convertNumeral from "../../../../utils/convertNumeral";
import { mobileFontSize } from "../../../../utils/mobileTextFontSize";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { destinationPictureStyle } from "./destinationContentStyle";
import type { IDestinationContent } from "../destinations";

type Props = {
    children: JSX.Element;
    destination: IDestinationContent | null;
};

const DestinationContent = ({ children, destination }: Props) => {
    const breakpoint = useBreakpoint();

    if (destination === null) return <>Not found</>;
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
                    backgroundImage: `url(${destination.picture})`,
                    backgroundSize: "cover",
                    ...destinationPictureStyle()[breakpoint],
                    margin: "auto",
                }}
            />
            <div>{children}</div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <Typography variant="h2" style={{ fontSize: mobileFontSize.destination.destination }}>
                    {destination.planet}
                </Typography>
            </div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <Typography variant="body1" style={{ fontSize: mobileFontSize.destination.description }}>
                    {destination.description}
                </Typography>
            </div>
            <Divider sx={{ marginY: "32px", borderColor: `${theme.palette.secondary.main}38` }} />
            <div style={{ margin: "auto", textAlign: "center", marginBottom: "32px" }}>
                <div>
                    <Typography variant="subtitle2" style={{ fontSize: mobileFontSize.destination.avgDistance }}>
                        Avg. distance
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" style={{ fontSize: mobileFontSize.destination.distance }}>
                        {convertNumeral(destination.distance)} km
                    </Typography>
                </div>
            </div>
            <div style={{ margin: "auto", textAlign: "center" }}>
                <div>
                    <Typography variant="subtitle2" style={{ fontSize: mobileFontSize.destination.estTravelTime }}>
                        Est. travel time
                    </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" style={{ fontSize: mobileFontSize.destination.distance }}>
                        {destination.travelTime.toString()} {destination.travelTimeUnit}
                        {destination.travelTime > 1 && "s"}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default DestinationContent;
