// THIRD-PARTY
import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons";

// PROJECT IMPORTS
import { OverrideIcon } from "types";
import { ADMIN_TYPE } from "config";

const icons = { IconDashboard, IconDeviceAnalytics };

interface DashboardMenuProps {
  id: string;
  title: React.ReactNode | string;
  type: string;
  role: number[];
  children: {
    id: string;
    title: React.ReactNode | string;
    type: string;
    role: number[];
    url: string;
    icon: OverrideIcon;
    breadcrumbs: boolean;
  }[];
}

const dashboard: DashboardMenuProps = {
  id: "dashboard",
  title: "",
  type: "group",
  role: [ADMIN_TYPE],
  children: [
    {
      id: "Trang chủ",
      title: "Trang chủ",
      type: "item",
      role: [ADMIN_TYPE],
      url: "/dashboard",
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default dashboard;
