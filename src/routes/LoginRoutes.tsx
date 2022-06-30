// THIRD-PARTY
import { lazy } from "react";

// PROJECT IMPORTS
import GuestGuard from "utils/route-guard/GuestGuard";
import Loadable from "components/Loadable";
import MinimalLayout from "layouts/MinimalLayout";
import NavMotion from "layouts/NavMotion";

const AuthLogin = Loadable(lazy(() => import("pages/Login")));

const LoginRoutes = {
  path: "/",
  element: (
    <NavMotion>
      <GuestGuard>
        <MinimalLayout />
      </GuestGuard>
    </NavMotion>
  ),
  children: [
    {
      path: "/login",
      element: <AuthLogin />,
    },
  ],
};

export default LoginRoutes;
