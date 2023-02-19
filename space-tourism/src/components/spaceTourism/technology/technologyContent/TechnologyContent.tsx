import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import setHeaderTitle from "../../../../utils/setHeaderTitle";
import useBreakpoint from "../../../../utils/useBreakpoint";
import { ITechnologyContent } from "../technologies";
import { technologyContentStyles } from "./technologyContentStyles";

type Props = {
    children: JSX.Element;
    technologies: ITechnologyContent | null;
};

const TechnologyContent = ({ children, technologies }: Props) => {
    const breakpoint = useBreakpoint();

    useEffect(() => setHeaderTitle("Technology", technologies?.technology || ""));

    if (technologies === null) return <>Not found</>;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignItems: "stretch",
                ...technologyContentStyles[breakpoint].container,
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${technologies.picture})`,
                    backgroundSize: "cover",
                    margin: "auto",
                    ...technologyContentStyles[breakpoint].image,
                }}
            />
            <div>{children}</div>
            <div
                style={{
                    margin: "auto",
                    textAlign: "center",
                    ...technologyContentStyles[breakpoint].content,
                }}
            >
                <div style={{ margin: "auto", textAlign: "center", ...technologyContentStyles[breakpoint].topLabel }}>
                    <Typography variant="navigation" style={{ ...technologyContentStyles[breakpoint].text.topLable }}>
                        THE TERMINOLOGY…
                    </Typography>
                </div>
                <div style={{ margin: "auto", textAlign: "center", ...technologyContentStyles[breakpoint].topic }}>
                    <Typography variant="h3" style={{ ...technologyContentStyles[breakpoint].text.topic }}>
                        {technologies.technology}
                    </Typography>
                </div>
                <div
                    style={{ margin: "auto", textAlign: "center", ...technologyContentStyles[breakpoint].description }}
                >
                    <Typography variant="body1" style={{ ...technologyContentStyles[breakpoint].text.description }}>
                        {technologies.description}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default TechnologyContent;
