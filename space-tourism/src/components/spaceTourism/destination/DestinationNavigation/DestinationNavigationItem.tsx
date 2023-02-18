import { Typography } from "@mui/material";
import React from "react";
import { mobileFontSize } from "../../../../utils/mobileTextFontSize";

type Props = {
    destinationName: string;
};

const DestinationNavigationItem = ({ destinationName }: Props) => {
    return (
        <>
            <Typography variant="subtitle2" style={{ fontSize: mobileFontSize.destination.navigation }}>
                {destinationName}
            </Typography>
        </>
    );
};

export default DestinationNavigationItem;
