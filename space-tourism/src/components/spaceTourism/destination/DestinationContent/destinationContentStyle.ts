import { CSSProperties } from "react";

export const destinationPictureStyle = (): Record<NCommon.TBreakpoints, CSSProperties> => ({
    desktop: {
        width: "445px",
        height: "445px",
    },
    tablet: {
        width: "300px",
        height: "300px",
    },
    mobile: {
        width: "170px",
        height: "170px",
    },
});
