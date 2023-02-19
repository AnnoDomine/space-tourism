import React, { useState } from "react";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { IDestinationContent } from "../destinations";
import DestinationNavigationItem from "./DestinationNavigationItem";
import { destinationNavigationStyles } from "./destinationNavigationStyles";

type Props = {
    selectedDestination: string;
    destinations: Pick<IDestinationContent, "route" | "planet">[];
    selectDestination: (destination: string) => void;
};

const DestinationNavigation = ({ selectedDestination, destinations, selectDestination }: Props) => {
    const breakpoint = useBreakpoint();

    const [hoveredDestination, setHoveredDestination] = useState<string>("");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                ...destinationNavigationStyles[breakpoint].container,
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
                            borderBottom: `${
                                hoveredDestination === destination.route || selectedDestination === destination.route
                                    ? "3"
                                    : "0"
                            }px solid ${
                                hoveredDestination === destination.route
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.tertiary.main
                            }`,
                            ...destinationNavigationStyles[breakpoint].navigation,
                        }}
                    >
                        <DestinationNavigationItem destinationName={destination.planet} breakpoint={breakpoint} />
                    </div>
                );
            })}
        </div>
    );
};

export default DestinationNavigation;
