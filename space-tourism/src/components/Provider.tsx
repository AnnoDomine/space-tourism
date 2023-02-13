import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

type TProviderProps = {
    children: JSX.Element | React.ReactNode;
};

const Provider = ({ children }: TProviderProps) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
    );
};

export default Provider;
