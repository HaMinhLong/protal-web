// THIRD-PARTY
import {
  IconStairsUp,
  IconUserCheck,
  IconHistory,
  IconFilePlus,
  IconWorld,
  IconUser,
} from "@tabler/icons";
import QuizIcon from "@mui/icons-material/Quiz";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

// PROJECT IMPORT
import { ADMIN_TYPE, CUSTOMER_TYPE } from "config";

const icons = {
  IconStairsUp,
  IconUserCheck,
  IconHistory,
  IconFilePlus,
  CorporateFareIcon,
  IconWorld,
  QuizIcon,
  IconUser,
};

const application = {
  id: "application",
  title: "Application",
  type: "group",
  role: [ADMIN_TYPE, CUSTOMER_TYPE],
  children: [
    {
      id: "Tài khoản",
      title: "Tài khoản",
      type: "item",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      url: "/account",
      icon: icons.IconUser,
      breadcrumbs: true,
    },
    {
      id: "Tin tức",
      title: "Tin tức",
      type: "item",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      url: "/article",
      icon: icons.IconWorld,
      breadcrumbs: true,
    },
  ],
};

export default application;
