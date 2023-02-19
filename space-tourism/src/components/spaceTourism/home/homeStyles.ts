export const homeStyles = {
    desktop: {
        outerContainer: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-evenly",
        },
        textContainer: {
            height: "276px",
            textAlign: "center",
            margin: "0px auto",
        },
        exploreCirle: {
            width: "274px",
            height: "274px",
        },
        text: {
            topLable: {},
            title: {},
            text: {},
            explore: {},
        },
    },
    tablet: {
        outerContainer: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "106px",
        },
        textContainer: {
            height: "334px",
            textAlign: "center",
            margin: "0px 159px",
        },
        exploreCirle: {
            width: "242px",
            height: "242px",
        },
        text: {
            topLable: { fontSize: "20px" },
            title: { fontSize: "150px" },
            text: { fontSize: "16px" },
            explore: { fontSize: "32px" },
        },
    },
    mobile: {
        outerContainer: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
        },
        textContainer: {
            height: "276px",
            textAlign: "center",
            margin: "0px 24px",
        },
        exploreCirle: {
            width: "150px",
            height: "150px",
        },
        text: {
            topLable: { fontSize: "16px" },
            title: { fontSize: "80px" },
            text: { fontSize: "15px" },
            explore: { fontSize: "20px" },
        },
    },
};
