import { useState } from "react";
import IconHamburger from "../../../shared/icons/IconHamburger";
import LogoComplete from "../../../shared/icons/LogoComplete";
import NavigationMobile from "./NavigationMobile";

const NavigationHeaderMobile = () => {
    const [navigationOpened, setNavigationOpened] = useState<boolean>(false);

    return (
        <>
            <LogoComplete logoSize={40} marginLeft={24} />
            <div
                style={{
                    width: 20,
                    height: 20,
                    cursor: "pointer",
                    float: "right",
                    marginRight: "24px",
                    display: "flex",
                    alignItems: "center",
                }}
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
