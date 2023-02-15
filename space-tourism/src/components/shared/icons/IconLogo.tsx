import { createSvgIcon } from "@mui/material/utils";

import { ReactComponent as Logo } from "./svgs/logo.svg";

const IconLogo = createSvgIcon(<Logo />, "Logo");

export default IconLogo;
