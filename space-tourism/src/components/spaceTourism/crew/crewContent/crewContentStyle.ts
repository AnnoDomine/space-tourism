export const crewContentStyle = {
    desktop: {
        container: {
            flexDirection: "column",
            padding: "24px",
        },
        image: {
            height: "445px",
        },
        text: {
            topLable: {},
            position: {},
            name: {},
            description: {},
        },
    },
    tablet: {
        container: {
            flexDirection: "column-reverse",
            justifyContent: "flex-end",
            padding: "60px",
            paddingBottom: "0px",
            minHeight: "0px",
            overflow: "hidden",
        },
        image: {
            height: "572px",
        },
        text: {
            topLable: { fontSize: "19px" },
            position: { fontSize: "24px" },
            name: { fontSize: "40px" },
            description: { fontSize: "16px" },
        },
    },
    mobile: {
        container: {
            flexDirection: "column",
            padding: "24px",
        },
        image: {
            height: "222px",
        },
        text: {
            topLable: { fontSize: "19px" },
            position: { fontSize: "16px" },
            name: { fontSize: "24px" },
            description: { fontSize: "15px" },
        },
    },
};
