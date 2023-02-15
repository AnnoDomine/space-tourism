import { Route, Routes } from "react-router-dom";
import Content from "./spaceTourism/Content";
import Home from "./spaceTourism/home/Home";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Content />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<></>} />
            </Route>
        </Routes>
    );
};

export default Router;
