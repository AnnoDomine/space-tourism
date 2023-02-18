import React, { useState } from "react";
import theme from "../../../theme";
import { ICrewMemberContent } from "../crewMember";

type Props = {
    crewMembers: Pick<ICrewMemberContent, "route">[];
    selectedMember: string;
    selectMember: (member: string) => void;
};

const CrewNavigation = ({ crewMembers, selectMember, selectedMember }: Props) => {
    const [hoveredMember, setHoveredMember] = useState<string>("");

    return (
        <div
            style={{
                display: "flex",
                width: "88px",
                height: "28px",
                margin: "32px auto",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "nowrap",
            }}
        >
            {crewMembers.map((member) => {
                return (
                    <div
                        onMouseEnter={() => setHoveredMember(member.route)}
                        onMouseLeave={() => setHoveredMember("")}
                        onClick={() => selectMember(member.route)}
                        key={`${member.route}_navi_item`}
                        style={{
                            cursor: "pointer",
                            borderRadius: "20px",
                            width: "10px",
                            height: "10px",
                            opacity: hoveredMember === member.route || selectedMember === member.route ? 1 : 0.1744,
                            backgroundColor: `${
                                hoveredMember === member.route
                                    ? theme.palette.tertiary.dark
                                    : theme.palette.tertiary.main
                            }`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default CrewNavigation;
