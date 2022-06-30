// THIRD-PARTY
import { memo } from "react";
import { Typography } from "@mui/material";

// PROJECT IMPORTS
import NavGroup from "./NavGroup";
import menuItem from "menu-items";

const MenuList = () => {
  // const user = JSON.parse(localStorage.getItem("user") || "{}");
  const user = {
    type: 1,
  };

  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        if (item.role === user.type || !item.role) {
          return <NavGroup key={item.id} item={item} />;
        }
        return <NavGroup key={item.id} item={item} />;
      case "item":
        if (item.role === user.type) {
          return <NavGroup key={item.id} item={item} />;
        }
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default memo(MenuList);
