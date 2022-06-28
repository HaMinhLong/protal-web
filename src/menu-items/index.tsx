// PROJECT IMPORTS
import dashboard from 'menu-items/dashboard';
import authorization from 'menu-items/application';
import { NavItemType } from 'types';

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, authorization]
};

export default menuItems;
