import { Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import { destinationNavigationStyles } from "./destinationNavigationStyles";

type Props = {
    destinationName: string;
    breakpoint: NCommon.TBreakpoints;
};

const DestinationNavigationItem = ({ destinationName, breakpoint }: Props) => {
    return (
        <>
            <Typography
                variant="subtitle2"
                style={{
                    ...(destinationNavigationStyles[breakpoint].text as CSSProperties),
                }}
            >
                {destinationName}
            </Typography>
        </>
    );
};

export default DestinationNavigationItem;
