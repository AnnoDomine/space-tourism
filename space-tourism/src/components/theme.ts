import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        navigation: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        navigation?: React.CSSProperties;
    }
}

declare module "@mui/material/styles/createPalette" {
    interface Palette {
        tertiary: PaletteColor;
    }
    interface PaletteOptions {
        tertiary: PaletteColorOptions;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        navigation: true;
    }
}

declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsColorOverrides {
        tertiary: true;
    }
}

const theme = createTheme({
    typography: {
        fontFamily: ["'Barlow Condensed', sans-serif", "'Bellefair', serif"].join(","),
        h1: {
            fontFamily: "'Bellefair', serif",
            fontSize: "150px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        h2: {
            fontFamily: "'Bellefair', serif",
            fontSize: "100px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        h3: {
            fontFamily: "'Bellefair', serif",
            fontSize: "56px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        h4: {
            fontFamily: "'Bellefair', serif",
            fontSize: "32px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        h5: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "28px",
            letterSpacing: 4.75,
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        subtitle1: {
            fontFamily: "'Bellefair', serif",
            fontSize: "28px",
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        subtitle2: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "14px",
            letterSpacing: 2.35,
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        navigation: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "16px",
            letterSpacing: 2.7,
            color: "#FFFFFF",
            textTransform: "uppercase",
        },
        body1: {
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "18px",
            color: "#FFFFFF",
        },
    },
    palette: {
        primary: {
            light: "#32343D",
            main: "#0B0D17",
            dark: "#000000",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: "#FFFFFF",
            main: "#D0D6F9",
            dark: "#9FA5C6",
            contrastText: "#000000",
        },
        tertiary: {
            light: "#FFFFFF",
            main: "#FFFFFF",
            dark: "#979797",
            contrastText: "#000000",
        },
    },
});

export default theme;
