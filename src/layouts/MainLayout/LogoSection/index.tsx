// THIRD-PARTY
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

// PROJECT IMPORTS
import { DASHBOARD_PATH, ADMIN_TYPE, ARTICLE_PATH } from "config";
import Logo from "components/Logo";
import { activeItem } from "features/menu/menuSlice";
import { useDispatch } from "app/store";
import useAuth from "hooks/useAuth";

const LogoSection = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const itemHandler = (id: string) => {
    dispatch(activeItem([id]));
  };

  return (
    <Link
      component={RouterLink}
      to={user?.type === ADMIN_TYPE ? DASHBOARD_PATH : ARTICLE_PATH}
      onClick={() =>
        itemHandler(user?.type === ADMIN_TYPE ? "dashboard" : "article")
      }
    >
      <Logo />
    </Link>
  );
};

export default LogoSection;
