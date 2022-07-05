// THIRD-PARTY
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

// PROJECT IMPORTS
import { DASHBOARD_PATH } from "config";
import Logo from "components/Logo";
import { activeItem } from "features/menu/menuSlice";
import { useDispatch } from "app/store";

const LogoSection = () => {
  const dispatch = useDispatch();
  const itemHandler = (id: string) => {
    dispatch(activeItem([id]));
  };

  return (
    <Link
      component={RouterLink}
      to={DASHBOARD_PATH}
      onClick={() => itemHandler("dashboard")}
    >
      <Logo />
    </Link>
  );
};

export default LogoSection;
