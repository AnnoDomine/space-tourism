import { Typography } from "@mui/material";
import getMobileFontSize, { TFontSizeHomeMap } from "../../../utils/mobileTextFontSize";
import useBreakpoint from "../../../utils/useBreakpoint";

type THomeProps = {};

const Home = (props: THomeProps) => {
    const breakpoint = useBreakpoint();

    const isMobile = breakpoint === "mobile";
    const isTablet = breakpoint === "tablet";

    console.log(isMobile);

    return (
        <div>
            <Typography variant="h5" {...(isMobile && getMobileFontSize<TFontSizeHomeMap>("home", "topLable"))}>
                So, you want to travel to
            </Typography>
            <Typography variant="h1" {...(isMobile && getMobileFontSize<TFontSizeHomeMap>("home", "title"))}>
                Space
            </Typography>
            <Typography variant="body1" {...(isMobile && getMobileFontSize<TFontSizeHomeMap>("home", "text"))}>
                Let´s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
                kind of on the edge of it. Well sit back, and relax because we´ll give you a truly out of this world
                experience!
            </Typography>
            Explore
        </div>
    );
};

export default Home;
