// THIRD-PARTY
import { Divider, List, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

// PROJECT IMPORTS
import NavCollapse from "../NavCollapse";
import NavItem from "../NavItem";
import { GenericCardProps } from "types";

export interface NavGroupProps {
  item: {
    id?: string;
    type?: string;
    role: number[];
    icon?: GenericCardProps["iconPrimary"];
    children?: NavGroupProps["item"][];
    title?: ReactNode | string;
    caption?: ReactNode | string;
    color?: "primary" | "secondary" | "default" | undefined;
  };
}

const NavGroup = ({ item }: NavGroupProps) => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        if (
          menu.role.findIndex(
            (roleItem: number) => roleItem === user?.userGroupId
          ) !== -1
            ? 1
            : 0 || !menu.role
        ) {
          return <NavCollapse key={menu.id} menu={menu} level={1} />;
        }
        return null;

      case "item":
        if (
          menu.role.findIndex(
            (roleItem: number) => roleItem === user?.userGroupId
          ) !== -1
            ? 1
            : 0 || !menu.role
        ) {
          return <NavItem key={menu.id} item={menu} level={1} />;
        }
        return null;

      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        subheader={
          item.title && (
            <Typography
              variant="caption"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: theme.palette.grey[600],
                padding: "6px",
                textTransform: "capitalize",
                marginTop: "10px",
              }}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    textTransform: "capitalize",
                  }}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

export default NavGroup;
