// THIRD-PARTY
import { IconDashboard, IconDeviceAnalytics } from "@tabler/icons";

// PROJECT IMPORTS
import { OverrideIcon } from "types";

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
  role: [1],
  children: [
    {
      id: "Trang chủ",
      title: "Trang chủ",
      type: "item",
      role: [1],
      url: "/dashboard",
      icon: icons.IconDashboard,
      breadcrumbs: true,
    },
  ],
};

export default dashboard;
