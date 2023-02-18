import React, { useState } from "react";
import theme from "../../../theme";
import { IDestinationContent } from "../destinations";
import DestinationNavigationItem from "./DestinationNavigationItem";

type Props = {
    selectedDestination: string;
    destinations: Pick<IDestinationContent, "route" | "planet">[];
    selectDestination: (destination: string) => void;
};

const DestinationNavigation = ({ selectedDestination, destinations, selectDestination }: Props) => {
    const [hoveredDestination, setHoveredDestination] = useState<string>("");

    return (
        <div
            style={{
                display: "flex",
                width: "237px",
                height: "28px",
                margin: "26px auto 20px",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
            }}
        >
            {destinations.map((destination) => {
                return (
                    <div
                        onMouseEnter={() => setHoveredDestination(destination.route)}
                        onMouseLeave={() => setHoveredDestination("")}
                        onClick={() => selectDestination(destination.route)}
                        key={`${destination.route}_navi_item`}
                        style={{
                            cursor: "pointer",
                            height: "25px",
                            borderBottom: `${
                                hoveredDestination === destination.route || selectedDestination === destination.route
                                    ? "3"
                                    : "0"
                            }px solid ${
                                hoveredDestination === destination.route
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.tertiary.main
                            }`,
                        }}
                    >
                        <DestinationNavigationItem destinationName={destination.planet} />
                    </div>
                );
            })}
        </div>
    );
};

export default DestinationNavigation;
