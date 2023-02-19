import Typography from "@mui/material/Typography";
import React, { CSSProperties, useState } from "react";
import { ROUTES } from "../../../utils/routes";
import useBreakpoint from "../../../utils/useBreakpoint";
import DestinationContent from "./DestinationContent/DestinationContent";
import DestinationNavigation from "./DestinationNavigation/DestinationNavigation";
import { destinations } from "./destinations";
import { destinationStyles } from "./destinationStyles";

const Destination = () => {
    const breakpoint = useBreakpoint();

    const [selectedDestination, setSelectedDestination] = useState<string>(ROUTES.destination.moon);

    return (
        <div>
            <div
                style={{
                    ...(destinationStyles[breakpoint].headerContainer as CSSProperties),
                }}
            >
                <Typography
                    variant="navigation"
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                        marginRight: "11px",
                        opacity: 0.25,
                        ...destinationStyles[breakpoint].headerText,
                    }}
                >
                    01
                </Typography>
                <Typography
                    variant="navigation"
                    sx={{
                        width: "100%",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                        ...destinationStyles[breakpoint].headerText,
                    }}
                >
                    Pick your destination
                </Typography>
            </div>
            <div>
                <DestinationContent
                    destination={destinations.find((dest) => dest.route === selectedDestination) || null}
                >
                    <DestinationNavigation
                        selectedDestination={selectedDestination}
                        destinations={
                            destinations
                                .slice()
                                .sort((a, b) => {
                                    if (a > b) return 1;
                                    if (a < b) return -1;
                                    return 0;
                                })
                                .map((destination) => {
                                    return { route: destination.route, planet: destination.planet };
                                }) || []
                        }
                        selectDestination={setSelectedDestination}
                    />
                </DestinationContent>
            </div>
        </div>
    );
};

export default Destination;
