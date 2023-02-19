import { useEffect } from "react";

const setHeaderTitle = (route: string, content: string) => {
    const baseTitle = "Space Tourism";

    document.title = `${baseTitle} - ${route} - ${content}`;
};

export default setHeaderTitle;
