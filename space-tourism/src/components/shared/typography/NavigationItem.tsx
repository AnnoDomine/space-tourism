import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../theme";

type Props = {
    breakpoint: "desktop" | "tablet" | "mobile";
    id: string;
    prefix?: string;
    item: string;
    active: boolean;
    onClick: () => void;
};

const NavigationItem = ({ breakpoint, id, prefix = "", item, active, onClick }: Props) => {
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
                          borderRight: `${active || hovered ? "4" : "0"}px solid ${
                              hovered ? theme.palette.tertiary.dark : theme.palette.tertiary.main
                          }`,
                      }
                    : {
                          borderBottom: `${active || hovered ? "4" : "0"}px solid ${
                              hovered ? theme.palette.tertiary.dark : theme.palette.tertiary.main
                          }`,
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
