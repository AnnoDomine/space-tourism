import moon from "/destination/image-moon.webp";
import mars from "/destination/image-mars.webp";
import europa from "/destination/image-europa.webp";
import titan from "/destination/image-titan.webp";
import { ROUTES } from "../../../utils/routes";

export interface IDestinationContent {
    route: string;
    planet: string;
    picture: string;
    description: string;
    distance: number;
    travelTime: number;
    travelTimeUnit: string;
}

export const destinations: IDestinationContent[] = [
    {
        route: ROUTES.destination.moon,
        picture: moon,
        planet: "Moon",
        description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: 384400,
        travelTime: 3,
        travelTimeUnit: "day",
    },
    {
        route: ROUTES.destination.mars,
        picture: mars,
        planet: "Mars",
        description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: 225000000,
        travelTime: 9,
        travelTimeUnit: "month",
    },
    {
        route: ROUTES.destination.europa,
        picture: europa,
        planet: "Europa",
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: 628000000,
        travelTime: 3,
        travelTimeUnit: "year",
    },
    {
        route: ROUTES.destination.titan,
        picture: titan,
        planet: "Titan",
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: 1600000000,
        travelTime: 7,
        travelTimeUnit: "year",
    },
];
