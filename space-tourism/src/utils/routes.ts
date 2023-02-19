export const ROUTES = {
    base: "/",
    home: {
        base: "home",
    },
    crew: {
        base: "crew",
        douglasHurley: "douglas-hurley",
        markShuttleworth: "mark-shuttleworth",
        victorGlover: "victor-glover",
        anoushehAnsari: "anousheh-ansari",
    },
    destination: {
        base: "destination",
        moon: "moon",
        mars: "mars",
        europa: "europa",
        titan: "titan",
    },
    technology: {
        base: "technology",
        launchVehicle: "launch-vehicle",
        spaceport: "spaceport",
        spaceCapsule: "space-capsule",
    },
} as const;

// Returns the base route of the content routes as type
export type TRoutes = (typeof ROUTES)[Exclude<keyof typeof ROUTES, "base">][keyof (typeof ROUTES)[Exclude<
    keyof typeof ROUTES,
    "base"
>]];
