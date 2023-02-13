import { useState } from "react";
import IconHamburger from "../../shared/icons/IconHamburger";
import NavigationMobile from "./navigationItems/NavigationMobile";

type Props = {};

const Navigation = (props: Props) => {
    const [navigationOpened, setNavigationOpened] = useState<boolean>(false);

    return (
        <div>
            <IconHamburger color="tertiary" onClick={() => setNavigationOpened(true)} />
            <NavigationMobile open={navigationOpened} onClose={() => setNavigationOpened(false)} />
        </div>
    );
};

export default Navigation;
