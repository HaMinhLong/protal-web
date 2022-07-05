// THIRD-PARTY
import {
  IconUser,
  IconNews,
  IconDice,
  IconView360,
  IconShoppingCart,
} from "@tabler/icons";

// PROJECT IMPORT
import { ADMIN_TYPE, CUSTOMER_TYPE } from "config";

const application = {
  id: "application",
  title: "Application",
  type: "group",
  role: [ADMIN_TYPE, CUSTOMER_TYPE],
  children: [
    {
      id: "Tài khoản",
      title: "Tài khoản",
      type: "collapse",
      role: [ADMIN_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: "Tài khoản",
          title: "Tài khoản",
          type: "item",
          url: "/account",
          icon: IconUser,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
      ],
    },
    {
      id: "Nội dung website",
      title: "Nội dung website",
      type: "collapse",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: "Thông tin website",
          title: "Thông tin website",
          type: "item",
          url: "/website",
          icon: IconView360,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Chuyên mục",
          title: "Chuyên mục",
          type: "item",
          url: "/category",
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Tin tức",
          title: "Tin tức",
          type: "item",
          url: "/article",
          icon: IconNews,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE],
        },
      ],
    },
    {
      id: "Sản phẩm",
      title: "Sản phẩm",
      type: "item",
      url: "/product",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconShoppingCart,
    },
  ],
};

export default application;
