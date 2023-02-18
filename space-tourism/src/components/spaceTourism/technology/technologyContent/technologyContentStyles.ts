import { CSSProperties } from "react";

export const technologyContentStyles = (): Record<NCommon.TBreakpoints, CSSProperties> => ({
    desktop: {
        width: "445px",
        height: "445px",
    },
    tablet: {
        width: "100%",
        height: "445px",
    },
    mobile: {
        width: "100%",
        height: "170px",
    },
});
