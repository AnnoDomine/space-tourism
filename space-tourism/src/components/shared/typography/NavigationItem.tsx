import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import theme from "../../theme";
import { navigationItemStyles } from "./navigationItemStyles";

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
                overflow: "hidden",
                cursor: "pointer",
                ...navigationItemStyles[breakpoint].container,
                ...(breakpoint === "mobile"
                    ? {
                          borderRight: `${active || hovered ? "4" : "0"}px solid ${
                              hovered ? theme.palette.tertiary.dark : theme.palette.tertiary.main
                          }`,
                      }
                    : {
                          borderBottom: `${active || hovered ? "3" : "0"}px solid ${
                              hovered ? theme.palette.tertiary.dark : theme.palette.tertiary.main
                          }`,
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
            <Typography
                variant="navigation"
                sx={{
                    width: "100%",
                    textOverflow: "clip",
                    whiteSpace: "nowrap",
                    ...(breakpoint === "tablet" && { fontSize: navigationItemStyles.tablet.text }),
                }}
            >
                {item}
            </Typography>
        </div>
    );
};

export default NavigationItem;
