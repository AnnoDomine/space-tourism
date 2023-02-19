import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useBreakpoint from "../../../../utils/useBreakpoint";
import theme from "../../../theme";
import { ITechnologyContent } from "../technologies";
import { technologyNavigationStyles } from "./technologyNavigationStyles";

type Props = {
    selectedTechnology: string;
    selectTechnology: (technology: string) => void;
    technologies: Pick<ITechnologyContent, "id" | "route">[];
};

const TechnologyNavigation = ({ selectTechnology, selectedTechnology, technologies }: Props) => {
    const breakpoint = useBreakpoint();
    const [hoveredTechnology, setHoveredTechnology] = useState<string>("");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
                ...technologyNavigationStyles[breakpoint].container,
            }}
        >
            {technologies.map((technology) => {
                return (
                    <div
                        onMouseEnter={() => setHoveredTechnology(technology.route)}
                        onMouseLeave={() => setHoveredTechnology("")}
                        onClick={() => selectTechnology(technology.route)}
                        key={`${technology.route}_navi_item`}
                        style={{
                            display: "flex",
                            borderRadius: "40px",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            border: `1px solid ${
                                hoveredTechnology === technology.route || selectedTechnology === technology.route
                                    ? theme.palette.tertiary.main
                                    : theme.palette.tertiary.dark
                            }`,
                            ...(hoveredTechnology !== technology.route &&
                                selectedTechnology === technology.route && {
                                    backgroundColor: theme.palette.tertiary.main,
                                }),
                            ...technologyNavigationStyles[breakpoint].item,
                        }}
                    >
                        <Typography
                            variant="subtitle2"
                            style={{
                                ...technologyNavigationStyles[breakpoint].text,
                                ...(hoveredTechnology !== technology.route &&
                                    selectedTechnology === technology.route && { color: theme.palette.primary.main }),
                            }}
                        >
                            {technology.id.toString()}
                        </Typography>
                    </div>
                );
            })}
        </div>
    );
};

export default TechnologyNavigation;
