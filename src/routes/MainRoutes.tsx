// THIRD-PARTY
import { lazy } from "react";

// PROJECT IMPORTS
import MainLayout from "layouts/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";
import { ADMIN_TYPE, CUSTOMER_TYPE } from "config";

const Dashboard = Loadable(lazy(() => import("pages/Dashboard")));
const UserGroup = Loadable(lazy(() => import("pages/UserGroup")));
const User = Loadable(lazy(() => import("pages/User")));
const Website = Loadable(lazy(() => import("pages/Website")));
const Category = Loadable(lazy(() => import("pages/Category")));
const Article = Loadable(lazy(() => import("pages/Article")));
const Product = Loadable(lazy(() => import("pages/Product")));

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
      path: "/userGroup",
      role: [ADMIN_TYPE],
      element: <UserGroup />,
    },
    {
      path: "/user",
      role: [ADMIN_TYPE],
      element: <User />,
    },
    {
      path: "/website",
      role: [ADMIN_TYPE],
      element: <Website />,
    },
    {
      path: "/category",
      role: [ADMIN_TYPE],
      element: <Category />,
    },
    {
      path: "/article",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      element: <Article />,
    },
    {
      path: "/product",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      element: <Product />,
    },
  ],
};

const user = JSON.parse(localStorage.getItem("user") || "{}");

MainRoutes.children = MainRoutes.children.filter((child) => {
  if (child.role.length > 0) {
    return child.role.findIndex(
      (item: number) => item === user?.userGroupId
    ) !== -1
      ? 1
      : 0;
  }
  return true;
});

export default MainRoutes;
