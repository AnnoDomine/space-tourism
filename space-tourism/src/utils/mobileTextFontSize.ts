import { isTypeOf } from "./isTypeOf";

interface IMobileFontSizeMap {
    home: {
        topLable: string;
        title: string;
        text: string;
    };
    destination: {
        topLable: string;
        innerNavigation: string;
        destination: string;
        description: string;
        avgDistance: string;
        distance: string;
        estTravelTime: string;
        travelTime: string;
    };
    crew: {
        topLable: string;
        position: string;
        name: string;
        description: string;
    };
    technology: {
        topLable: string;
        type: string;
        topic: string;
        description: string;
    };
}

export type TFontSizeHomeMap = keyof IMobileFontSizeMap["home"];
export type TFontSizeDestinationMap = keyof IMobileFontSizeMap["destination"];
export type TFontSizeCrewMap = keyof IMobileFontSizeMap["crew"];
export type TFontSizetechnologyMap = keyof IMobileFontSizeMap["technology"];

export const mobileFontSize: IMobileFontSizeMap = {
    home: {
        topLable: "16px",
        title: "80px",
        text: "15px",
    },
    destination: {
        topLable: "16px",
        innerNavigation: "14px",
        destination: "56px",
        description: "15px",
        avgDistance: "14px",
        distance: "28px",
        estTravelTime: "14px",
        travelTime: "28px",
    },
    crew: {
        topLable: "19px",
        position: "16px",
        name: "24px",
        description: "15px",
    },
    technology: {
        topLable: "16px",
        type: "14px",
        topic: "24px",
        description: "15px",
    },
};

type TMobileFontSizeReturn = {
    sx: {
        fontSize: string;
        textAlign: string;
        marginX: string;
    };
};

type TKeyOfMobileFontSize = keyof typeof mobileFontSize;

/**
 * Generic have to be on of
 *
 * TFontSizeHomeMap | TFontSizeDestinationMap | TFontSizeCrewMap | TFontSizetechnologyMap
 *
 * @param route Route to get font size from map
 * @param text Text id
 * @returns style-object
 */
function getMobileFontSize<TextType>(route: TKeyOfMobileFontSize, text: TextType): TMobileFontSizeReturn {
    let selectedFontSize = "";
    if (route === "home" && isTypeOf<TFontSizeHomeMap>(text)) selectedFontSize = mobileFontSize.home[text];
    if (route === "destination" && isTypeOf<TFontSizeDestinationMap>(text))
        selectedFontSize = mobileFontSize.destination[text];
    if (route === "crew" && isTypeOf<TFontSizeCrewMap>(text)) selectedFontSize = mobileFontSize.crew[text];
    if (route === "technology" && isTypeOf<TFontSizetechnologyMap>(text))
        selectedFontSize = mobileFontSize.technology[text];

    if (selectedFontSize === "") throw Error("Wrong text id");

    return {
        sx: {
            fontSize: selectedFontSize,
            textAlign: "center",
            marginX: "24px",
        },
    };
}

export default getMobileFontSize;
