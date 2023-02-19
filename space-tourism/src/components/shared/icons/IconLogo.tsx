import { createSvgIcon } from "@mui/material/utils";

import Logo from "/shared/logo_complete.png";

const IconLogo = ({ size }: { size: number }) => <img src={Logo} width={size} height={size} alt="Space tourism logo" />;

export default IconLogo;
