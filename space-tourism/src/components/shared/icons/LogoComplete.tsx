import IconLogo from "./IconLogo";

type Props = {};

const LogoComplete = (props: Props) => {
    return (
        <div
            style={{
                width: "40px",
                height: "40px",
                margin: "24px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
            }}
        >
            <div>
                <div>
                    <IconLogo color="tertiary" style={{ fontSize: "20px" }} />
                </div>
                <div style={{ marginTop: "-4px" }}>
                    <IconLogo color="tertiary" style={{ fontSize: "20px", transform: "rotate(270deg)" }} />
                </div>
            </div>
            <div>
                <div>
                    <IconLogo color="tertiary" style={{ fontSize: "20px", transform: "rotate(90deg)" }} />
                </div>
                <div style={{ marginTop: "-4px" }}>
                    <IconLogo color="tertiary" style={{ fontSize: "20px", transform: "rotate(0deg)" }} />
                </div>
            </div>
        </div>
    );
};

export default LogoComplete;
