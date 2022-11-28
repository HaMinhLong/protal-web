// THIRD-PARTY
import {
  IconUser,
  IconUsers,
  IconNews,
  IconDice,
  IconShoppingCart,
  IconBrandWhatsapp,
  IconBuildingStore,
  IconMessageCircle
} from '@tabler/icons';
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// PROJECT IMPORT
import { ADMIN_TYPE, CUSTOMER_TYPE } from 'config';

const icons = { IconDashboard, IconDeviceAnalytics };

const application = {
  id: 'application',
  title: '',
  type: 'group',
  role: [ADMIN_TYPE, CUSTOMER_TYPE],
  children: [
    {
      id: 'Trang chủ',
      title: 'Trang chủ',
      type: 'item',
      role: [ADMIN_TYPE],
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: true
    },
    {
      id: 'Nhóm tài khoản',
      title: 'Nhóm tài khoản',
      type: 'collapse',
      role: [ADMIN_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: 'Nhóm tài khoản',
          title: 'Nhóm tài khoản',
          type: 'item',
          url: '/userGroup',
          icon: IconUsers,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Tài khoản',
          title: 'Tài khoản',
          type: 'item',
          url: '/user',
          icon: IconUser,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        }
      ]
    },
    {
      id: 'Nội dung website',
      title: 'Nội dung website',
      type: 'collapse',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: 'Nhóm website',
          title: 'Nhóm website',
          type: 'item',
          url: '/website-group',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Website',
          title: 'Website',
          type: 'item',
          url: '/website',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Menu website',
          title: 'Menu website',
          type: 'item',
          url: '/menu',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        },
        {
          id: 'Nhóm chuyên mục',
          title: 'Nhóm chuyên mục',
          type: 'item',
          url: '/category-group',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Chuyên mục',
          title: 'Chuyên mục',
          type: 'item',
          url: '/category',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        },
        {
          id: 'Bộ danh sách',
          title: 'Bộ danh sách',
          type: 'item',
          url: '/collection',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        }
      ]
    },
    {
      id: 'Danh muc',
      title: 'Danh muc',
      type: 'collapse',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: 'PT thanh toán',
          title: 'PT thanh toán',
          type: 'item',
          url: '/paymentMethod',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        }
      ]
    },
    {
      id: 'Nhóm NSX - NCC',
      title: 'Nhóm NSX - NCC',
      type: 'collapse',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      children: [
        {
          id: 'Nhóm nhà sản xuất',
          title: 'Nhóm nhà sản xuất',
          type: 'item',
          url: '/producerGroup',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Nhà sản xuất',
          title: 'Nhà sản xuất',
          type: 'item',
          url: '/producer',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        },
        {
          id: 'Nhóm nhà cung cấp',
          title: 'Nhóm nhà cung cấp',
          type: 'item',
          url: '/supplierGroup',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE]
        },
        {
          id: 'Nhà cung cấp',
          title: 'Nhà cung cấp',
          type: 'item',
          url: '/supplier',
          icon: IconDice,
          breadcrumbs: true,
          role: [ADMIN_TYPE, CUSTOMER_TYPE]
        }
      ]
    },
    {
      id: 'Tin túc',
      title: 'Tin túc',
      type: 'item',
      url: '/article',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconNews
    },
    {
      id: 'Sản phẩm',
      title: 'Sản phẩm',
      type: 'item',
      url: '/product',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconBuildingStore
    },
    {
      id: 'Đơn hàng',
      title: 'Đơn hàng',
      type: 'item',
      url: '/order',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconShoppingCart
    },
    {
      id: 'Bình luận sản phẩm',
      title: 'Bình luận sản phẩm',
      type: 'item',
      url: '/comment',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconMessageCircle
    },
    {
      id: 'Liên hệ',
      title: 'Liên hệ',
      type: 'item',
      url: '/message',
      role: [ADMIN_TYPE, CUSTOMER_TYPE],
      breadcrumbs: true,
      icon: IconBrandWhatsapp
    }
  ]
};

export default application;
