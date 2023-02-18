import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import Content from "./spaceTourism/Content";
import Crew from "./spaceTourism/crew/Crew";
import Destination from "./spaceTourism/destination/Destination";
import Home from "./spaceTourism/home/Home";
import Technology from "./spaceTourism/technology/Technology";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.base} element={<Content />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.home.base} element={<Home />} />
                <Route path={ROUTES.destination.base} element={<Destination />} />
                <Route path={ROUTES.crew.base} element={<Crew />} />
                <Route path={ROUTES.technology.base} element={<Technology />} />
                <Route path="*" element={<></>} />
            </Route>
        </Routes>
    );
};

export default Router;
