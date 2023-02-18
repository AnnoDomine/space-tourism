import launchVehicleLandscape from "/technology/image-launch-vehicle-landscape.jpg";
import spaceportLandscape from "/technology/image-spaceport-landscape.jpg";
import spaceCapsuleLandscape from "/technology/image-space-capsule-landscape.jpg";

import launchVehiclePortrait from "/technology/image-launch-vehicle-portrait.jpg";
import spaceportPortrait from "/technology/image-spaceport-portrait.jpg";
import spaceCapsulePortrait from "/technology/image-space-capsule-portrait.jpg";

import { ROUTES } from "../../../utils/routes";

export interface ITechnologyContent {
    id: number;
    route: string;
    picture: string;
    technology: string;
    description: string;
}

export const technologies = (isDesktop: boolean): ITechnologyContent[] => {
    return [
        {
            id: 1,
            route: ROUTES.technology.launchVehicle,
            picture: !isDesktop ? launchVehicleLandscape : launchVehiclePortrait,
            technology: "Launch vehicle",
            description:
                "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
            id: 2,
            route: ROUTES.technology.spaceport,
            picture: !isDesktop ? spaceportLandscape : spaceportPortrait,
            technology: "Space port",
            description:
                "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
            id: 3,
            route: ROUTES.technology.spaceCapsule,
            picture: !isDesktop ? spaceCapsuleLandscape : spaceCapsulePortrait,
            technology: "Space capsule",
            description:
                "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
    ];
};
