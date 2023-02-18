import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { mobileFontSize } from "../../../../utils/mobileTextFontSize";
import { ROUTES } from "../../../../utils/routes";
import theme from "../../../theme";
import { ITechnologyContent } from "../technologies";

type Props = {
    selectedTechnology: string;
    selectTechnology: (technology: string) => void;
    technologies: Pick<ITechnologyContent, "id" | "route">[];
};

const TechnologyNavigation = ({ selectTechnology, selectedTechnology, technologies }: Props) => {
    const [hoveredTechnology, setHoveredTechnology] = useState<string>("");

    return (
        <div
            style={{
                display: "flex",
                width: "152px",
                height: "40px",
                margin: "34px auto 26px",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
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
                            height: "40px",
                            width: "40px",
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
                        }}
                    >
                        <Typography
                            variant="subtitle2"
                            style={{
                                fontSize: mobileFontSize.technology.topLable,
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
