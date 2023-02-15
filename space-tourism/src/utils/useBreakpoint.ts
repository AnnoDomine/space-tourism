import { useMediaQuery } from "@mui/material";

const useBreakpoint = (): NCommon.TBreakpoints => {
    const tablet = useMediaQuery("(min-width: 600px)");
    const desktop = useMediaQuery("(min-width: 900px)");

    if (desktop) return "desktop";
    if (tablet) return "tablet";
    return "mobile";
};

export default useBreakpoint;
