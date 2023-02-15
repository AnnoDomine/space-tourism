import { useState } from "react";
import IconHamburger from "../../../shared/icons/IconHamburger";
import LogoComplete from "../../../shared/icons/LogoComplete";
import NavigationMobile from "./NavigationMobile";

type Props = {};

const NavigationHeaderMobile = (props: Props) => {
    const [navigationOpened, setNavigationOpened] = useState<boolean>(false);

    return (
        <>
            <LogoComplete />
            <div
                style={{ width: 20, height: 20, cursor: "pointer", float: "right", margin: "33px 24px 0px 0px" }}
                onClick={() => setNavigationOpened(true)}
            >
                <IconHamburger
                    color="tertiary"
                    onClick={() => setNavigationOpened(true)}
                    style={{ width: 24, height: 21 }}
                />
            </div>
            <NavigationMobile open={navigationOpened} onClose={() => setNavigationOpened(false)} />
        </>
    );
};

export default NavigationHeaderMobile;
