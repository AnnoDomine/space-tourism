import backgroundMobile from "/home/background-home-mobile.jpg";
import backgroundTablet from "/home/background-home-tablet.jpg";
import backgroundDesktop from "/home/background-home-desktop.jpg";

import Provider from "./components/Provider";
import Router from "./components/Router";
import useBreakpoint from "./utils/useBreakpoint";

function App() {
    const breakpoint = useBreakpoint();

    const background = {
        desktop: backgroundDesktop,
        tablet: backgroundTablet,
        mobile: backgroundMobile,
    };

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${background[breakpoint]})`,
                backgroundSize: "cover",
            }}
        >
            <Provider>
                <Router />
            </Provider>
        </div>
    );
}

export default App;
