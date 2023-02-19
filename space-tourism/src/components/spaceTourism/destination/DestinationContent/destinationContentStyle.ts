import { CSSProperties } from "react";

export const destinationPictureStyle = {
    desktop: {
        container: {
            padding: "60px",
            paddingBottom: "0px",
        },
        image: {
            width: "445px",
            height: "445px",
        },
        contentInformations: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        divider: {
            marginTop: "32px",
            marginBottom: "32px",
        },
        text: {
            topLable: {},
            innerNavigation: {},
            destination: {},
            description: {},
            avgDistance: {},
            distance: {},
            estTravelTime: {},
            travelTime: {},
        },
    },
    tablet: {
        container: {
            padding: "97px",
            paddingBottom: "0px",
        },
        image: {
            width: "300px",
            height: "300px",
        },
        contentInformations: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        divider: {
            marginTop: "49px",
            marginBottom: "32px",
        },
        text: {
            topLable: { fontSize: "16px" },
            innerNavigation: { fontSize: "14px" },
            destination: { fontSize: "60px" },
            description: { fontSize: "16px", lineheight: "28px" },
            avgDistance: { fontSize: "14px", width: "180px" },
            distance: { fontSize: "28px" },
            estTravelTime: { fontSize: "14px", width: "180px" },
            travelTime: { fontSize: "28px" },
        },
    },
    mobile: {
        container: {
            padding: "24px",
        },
        image: {
            width: "170px",
            height: "170px",
        },
        contentInformations: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
            height: "154px",
            justifyContent: "space-between",
        },
        divider: {
            marginTop: "32px",
            marginBottom: "32px",
        },
        text: {
            topLable: { fontSize: "16px" },
            innerNavigation: { fontSize: "14px" },
            destination: { fontSize: "56px" },
            description: { fontSize: "15px", lineheight: "25px" },
            avgDistance: { fontSize: "14px", width: "150px" },
            distance: { fontSize: "28px" },
            estTravelTime: { fontSize: "14px", width: "150px" },
            travelTime: { fontSize: "28px" },
        },
    },
};
