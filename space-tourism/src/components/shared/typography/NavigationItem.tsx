import { Typography } from "@mui/material";
import { useState } from "react";
import theme from "../../theme";

type Props = {
    breakpoint: "desktop" | "tablet" | "mobile";
    id: string;
    prefix?: string;
    item: string;
    onClick: () => void;
};

const NavigationItem = ({ breakpoint, id, prefix = "", item, onClick }: Props) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            id={id}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
            style={{
                width: breakpoint === "mobile" ? "217.5px" : "100%",
                overflow: "hidden",
                padding: breakpoint === "mobile" ? "16px 0px" : "18px 0px 14px 0px",
                cursor: "pointer",
                ...(breakpoint === "mobile"
                    ? {
                          borderRight: `${hovered ? "4" : "0"}px solid ${theme.palette.tertiary.dark}`,
                      }
                    : {
                          borderBottom: `${hovered ? "4" : "0"}px solid ${theme.palette.tertiary.dark}`,
                          margin: "0px 18px 0px 18px",
                      }),
            }}
        >
            {breakpoint !== "tablet" && (
                <Typography
                    variant="navigation"
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        textOverflow: "clip",
                        whiteSpace: "nowrap",
                        marginRight: "11px",
                    }}
                >
                    {prefix}
                </Typography>
            )}
            <Typography variant="navigation" sx={{ width: "100%", textOverflow: "clip", whiteSpace: "nowrap" }}>
                {item}
            </Typography>
        </div>
    );
};

export default NavigationItem;
