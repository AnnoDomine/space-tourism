import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import CrewContent from "./crewContent/CrewContent";
import { crewMember } from "./crewMember";
import CrewNavigation from "./crewNavigation/CrewNavigation";
// import { destinations } from "./destinations";

const Crew = () => {
    const [selectedMember, setSelectedMember] = useState<string>("douglas-hurley");

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
