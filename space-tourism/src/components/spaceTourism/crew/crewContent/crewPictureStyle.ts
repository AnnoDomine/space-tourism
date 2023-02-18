import { CSSProperties } from "react";

export const crewPictureStyle = (): Record<NCommon.TBreakpoints, CSSProperties> => ({
    desktop: {
        height: "445px",
    },
    tablet: {
        height: "300px",
    },
    mobile: {
        height: "222px",
    },
});
