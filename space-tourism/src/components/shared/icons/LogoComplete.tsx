import IconLogo from "./IconLogo";

type Props = {
    logoSize: number;
    marginLeft: number;
};

const LogoComplete = ({ logoSize, marginLeft }: Props) => {
    return (
        <div
            style={{
                width: `${logoSize}px`,
                height: `${logoSize}px`,
                marginLeft: `${marginLeft}px`,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
            }}
        >
            <IconLogo size={logoSize} />
        </div>
    );
};

export default LogoComplete;
