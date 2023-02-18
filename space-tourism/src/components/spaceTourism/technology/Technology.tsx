import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { ROUTES } from "../../../utils/routes";
import useBreakpoint from "../../../utils/useBreakpoint";
import { technologies } from "./technologies";
import TechnologyContent from "./technologyContent/TechnologyContent";
import TechnologyNavigation from "./technologyNavigation/TechnologyNavigation";

type Props = {};

const Technology = (props: Props) => {
    const breakpoint = useBreakpoint();

    const [selectedTechnology, setSelectedTechnology] = useState<string>(ROUTES.technology.launchVehicle);

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
                    02
                </Typography>
                <Typography variant="navigation" sx={{ width: "100%", textOverflow: "clip", whiteSpace: "nowrap" }}>
                    Space launch 101
                </Typography>
            </div>
            <div>
                <TechnologyContent
                    technologies={
                        technologies(breakpoint === "desktop").find(
                            (technology) => technology.route === selectedTechnology
                        ) || null
                    }
                >
                    <TechnologyNavigation
                        selectedTechnology={selectedTechnology}
                        technologies={
                            technologies(breakpoint === "desktop")
                                .slice()
                                .sort((a, b) => {
                                    if (a.id > b.id) return 1;
                                    if (a.id < b.id) return -1;
                                    return 0;
                                })
                                .map((technology) => {
                                    return { route: technology.route, id: technology.id };
                                }) || []
                        }
                        selectTechnology={setSelectedTechnology}
                    />
                </TechnologyContent>
            </div>
        </div>
    );
};

export default Technology;
