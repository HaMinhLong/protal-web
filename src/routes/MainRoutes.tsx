// THIRD-PARTY
import { lazy } from "react";

// PROJECT IMPORTS
import MainLayout from "layouts/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";
import { ADMIN_TYPE, CUSTOMER_TYPE } from "config";

const Dashboard = Loadable(lazy(() => import("pages/Dashboard")));
const Account = Loadable(lazy(() => import("pages/Account")));
const Article = Loadable(lazy(() => import("pages/Article")));

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/dashboard",
      role: [ADMIN_TYPE],
      element: <Dashboard />,
    },
    {
      path: "/account",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      element: <Account />,
    },
    {
      path: "/article",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      element: <Article />,
    },
  ],
};

const user = JSON.parse(localStorage.getItem("user") || "{}");

MainRoutes.children = MainRoutes.children.filter((child) => {
  if (child.role.length > 0) {
    return child.role.findIndex((item: number) => item === user.type) !== -1
      ? 1
      : 0;
  }
  return true;
});

export default MainRoutes;
