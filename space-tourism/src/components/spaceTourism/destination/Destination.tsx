import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import DestinationContent from "./DestinationContent/DestinationContent";
import DestinationNavigation from "./DestinationNavigation/DestinationNavigation";
import { destinations } from "./destinations";

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState<string>("moon");

    return (
        <div>
            <div style={{ textAlign: "center" }}>
                <Typography
                    variant="navigation"
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                        marginRight: "11px",
                        opacity: 0.25,
                    }}
                >
                    01
                </Typography>
                <Typography variant="navigation" sx={{ width: "100%", textOverflow: "clip", whiteSpace: "nowrap" }}>
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
