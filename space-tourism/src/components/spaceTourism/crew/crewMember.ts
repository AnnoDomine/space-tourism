import duglasHurley from "/crew/image-douglas-hurley.webp";
import markShuttleworth from "/crew/image-mark-shuttleworth.webp";
import victorGlover from "/crew/image-victor-glover.webp";
import anoushehAnsari from "/crew/image-anousheh-ansari.webp";
import { ROUTES } from "../../../utils/routes";

export interface ICrewMemberContent {
    id: number;
    route: string;
    picture: string;
    position: string;
    name: string;
    description: string;
}

export const crewMember: ICrewMemberContent[] = [
    {
        id: 1,
        route: ROUTES.crew.douglasHurley,
        picture: duglasHurley,
        position: "Commander",
        description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        name: "Douglas Hurley",
    },
    {
        id: 2,
        route: ROUTES.crew.markShuttleworth,
        picture: markShuttleworth,
        position: "Mission specialist",
        description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        name: "Mark Shuttleworth",
    },
    {
        id: 3,
        route: ROUTES.crew.victorGlover,
        picture: victorGlover,
        position: "Pilot",
        description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        name: "Victor Glover",
    },
    {
        id: 4,
        route: ROUTES.crew.anoushehAnsari,
        picture: anoushehAnsari,
        position: "Flight Engineer",
        description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        name: "Anousheh Ansari",
    },
];
