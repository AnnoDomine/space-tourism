import { Divider, Typography } from "@mui/material";
import convertNumeral from "../../../../utils/convertNumeral";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { destinationPictureStyle } from "./destinationContentStyle";
import type { IDestinationContent } from "../destinations";
import { CSSProperties, useEffect } from "react";
import setHeaderTitle from "../../../../utils/setHeaderTitle";

type Props = {
    children: JSX.Element;
    destination: IDestinationContent | null;
};

const DestinationContent = ({ children, destination }: Props) => {
    const breakpoint = useBreakpoint();

    useEffect(() => setHeaderTitle("Destination", destination?.planet || ""));

    if (destination === null) return <>Not found</>;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "stretch",
                ...(destinationPictureStyle[breakpoint].container as CSSProperties),
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${destination.picture})`,
                    backgroundSize: "cover",
                    margin: "auto",
                    ...destinationPictureStyle[breakpoint].image,
                }}
            />
            <div>
                <div>{children}</div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <Typography
                        variant="h2"
                        style={{
                            ...destinationPictureStyle[breakpoint].text.destination,
                        }}
                    >
                        {destination.planet}
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>
                    <Typography variant="body1" style={{ ...destinationPictureStyle[breakpoint].text.description }}>
                        {destination.description}
                    </Typography>
                </div>
                <div>
                    <Divider
                        sx={{
                            borderColor: `${theme.palette.secondary.main}38`,
                            ...destinationPictureStyle[breakpoint].divider,
                        }}
                    />
                    <div
                        style={{
                            ...(destinationPictureStyle[breakpoint].contentInformations as CSSProperties),
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <div>
                                <Typography
                                    variant="subtitle2"
                                    style={{ ...destinationPictureStyle[breakpoint].text.avgDistance }}
                                >
                                    Avg. distance
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    style={{ ...destinationPictureStyle[breakpoint].text.distance }}
                                >
                                    {convertNumeral(destination.distance)} km
                                </Typography>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div>
                                <Typography
                                    variant="subtitle2"
                                    style={{ ...destinationPictureStyle[breakpoint].text.estTravelTime }}
                                >
                                    Est. travel time
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    style={{ ...destinationPictureStyle[breakpoint].text.distance }}
                                >
                                    {destination.travelTime.toString()} {destination.travelTimeUnit}
                                    {destination.travelTime > 1 && "s"}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationContent;
