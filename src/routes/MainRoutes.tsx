// THIRD-PARTY
import { lazy } from "react";

// PROJECT IMPORTS
import MainLayout from "layouts/MainLayout";
import Loadable from "components/Loadable";
import AuthGuard from "utils/route-guard/AuthGuard";

const Dashboard = Loadable(lazy(() => import("pages/Dashboard")));
const Account = Loadable(lazy(() => import("pages/Account")));

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
      role: 1,
      element: <Dashboard />,
    },
    {
      path: "/account",
      role: 1,
      element: <Account />,
    },
  ],
};

// const user = JSON.parse(localStorage.getItem("user") || "{}");

// MainRoutes.children = MainRoutes.children.filter((child) => {
//   if (child.role) {
//     return user.type === child.role;
//   }
//   return true;
// });

export default MainRoutes;
