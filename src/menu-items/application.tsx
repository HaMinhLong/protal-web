// THIRD-PARTY
import {
  IconUser,
  IconUsers,
  IconNews,
  IconDice,
  IconView360,
  IconShoppingCart,
  IconBrandWhatsapp,
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
      id: "Nhóm tài khoản",
      title: "Nhóm tài khoản",
      type: "collapse",
      role: [ADMIN_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: "Nhóm tài khoản",
          title: "Nhóm tài khoản",
          type: "item",
          url: "/userGroup",
          icon: IconUsers,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Tài khoản",
          title: "Tài khoản",
          type: "item",
          url: "/user",
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
          id: "Nhóm website",
          title: "Nhóm website",
          type: "item",
          url: "/website-group",
          icon: IconView360,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Website",
          title: "Website",
          type: "item",
          url: "/website",
          icon: IconView360,
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
      id: "Danh muc",
      title: "Danh muc",
      type: "collapse",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: "Menu website",
          title: "Menu website",
          type: "item",
          url: "/menu",
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Nhóm chuyên mục",
          title: "Nhóm chuyên mục",
          type: "item",
          url: "/category-group",
          icon: IconDice,
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
      ],
    },
    {
      id: "Nhóm NSX - NCC",
      title: "Nhóm NSX - NCC",
      type: "collapse",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: "Nhóm nhà sản xuất",
          title: "Nhóm nhà sản xuất",
          type: "item",
          url: "/producerGroup",
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Nhà sản xuất",
          title: "Nhà sản xuất",
          type: "item",
          url: "/producer",
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE],
        },
        {
          id: "Nhóm nhà cung cấp",
          title: "Nhóm nhà cung cấp",
          type: "item",
          url: "/supplierGroup",
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE],
        },
        {
          id: "Nhà cung cấp",
          title: "Nhà cung cấp",
          type: "item",
          url: "/supplier",
          icon: IconDice,
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
    {
      id: "Liên hệ",
      title: "Liên hệ",
      type: "item",
      url: "/message",
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconBrandWhatsapp,
    },
  ],
};

export default application;
