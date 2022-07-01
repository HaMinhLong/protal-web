// THIRD-PARTY
import {
  IconStairsUp,
  IconUserCheck,
  IconHistory,
  IconFilePlus,
  IconWorld,
} from "@tabler/icons";
import QuizIcon from "@mui/icons-material/Quiz";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const icons = {
  IconStairsUp,
  IconUserCheck,
  IconHistory,
  IconFilePlus,
  CorporateFareIcon,
  IconWorld,
  QuizIcon,
};

const application = {
  id: "application",
  title: "Application",
  type: "group",
  role: 1,
  children: [
    {
      id: "Account",
      title: "Account",
      type: "item",
      role: 1,
      url: "/account",
      icon: icons.IconWorld,
      breadcrumbs: true,
    },
    {
      id: "Article",
      title: "Article",
      type: "item",
      role: 1,
      url: "/article",
      icon: icons.IconWorld,
      breadcrumbs: true,
    },
  ],
};

export default application;
