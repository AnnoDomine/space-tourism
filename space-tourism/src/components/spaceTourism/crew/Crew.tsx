import Typography from "@mui/material/Typography";
import React, { CSSProperties, useState } from "react";
import { ROUTES } from "../../../utils/routes";
import useBreakpoint from "../../../utils/useBreakpoint";
import CrewContent from "./crewContent/CrewContent";
import { crewMember } from "./crewMember";
import CrewNavigation from "./crewNavigation/CrewNavigation";
import { crewStyles } from "./crewStyles";

const Crew = () => {
    const breakpoint = useBreakpoint();

    const [selectedMember, setSelectedMember] = useState<string>(ROUTES.crew.douglasHurley);

    return (
        <div>
            <div
                style={{
                    ...(crewStyles[breakpoint].headerContainer as CSSProperties),
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
                        ...crewStyles[breakpoint].headerText,
                    }}
                >
                    02
                </Typography>
                <Typography
                    variant="navigation"
                    sx={{
                        width: "100%",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                        ...crewStyles[breakpoint].headerText,
                    }}
                >
                    Meet your crew
                </Typography>
            </div>
            <div>
                <CrewContent crew={crewMember.find((member) => member.route === selectedMember) || null}>
                    <CrewNavigation
                        selectedMember={selectedMember}
                        crewMembers={
                            crewMember
                                .slice()
                                .sort((a, b) => {
                                    if (a.id > b.id) return 1;
                                    if (a.id < b.id) return -1;
                                    return 0;
                                })
                                .map((destination) => {
                                    return { route: destination.route };
                                }) || []
                        }
                        selectMember={setSelectedMember}
                    />
                </CrewContent>
            </div>
        </div>
    );
};

export default Crew;
