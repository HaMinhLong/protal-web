// THIRD-PARTY
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// PROJECT IMPORTS
import NavItem from "../NavItem";
import useConfig from "hooks/useConfig";
import { NavGroupProps } from "../NavGroup";

interface NavCollapseProps {
  menu: NavGroupProps["item"];
  level: number;
}

const NavCollapse = ({ menu, level }: NavCollapseProps) => {
  const theme = useTheme();
  const { borderRadius } = useConfig();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null | undefined>(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const childrens = menu.children ? menu.children : [];
    const isSelected = childrens.some((item: any) => {
      if (pathname && pathname.includes("product-details")) {
        if (item.url && item.url.includes("product-details")) {
          setOpen(true);
        }
      }
      if (item.url === pathname) {
        setOpen(true);
        setSelected(menu.id);
        return true;
      }
      return false;
    });
    if (!isSelected) {
      setSelected(null);
    }
  }, [pathname, menu.children, menu.id]);
  // menu collapse & item
  const menus = menu.children?.map((item) => {
    console.log("menu.children", menu.children);
    switch (item.type) {
      case "collapse":
        if (
          item.role.findIndex((roleItem: number) => roleItem === user.type) !==
          -1
            ? 1
            : 0
        ) {
          return <NavCollapse key={item.id} menu={item} level={level + 1} />;
        }
        return null;

      case "item":
        if (
          item.role.findIndex((roleItem: number) => roleItem === user.type) !==
          -1
            ? 1
            : 0
        ) {
          return <NavItem key={item.id} item={item} level={level + 1} />;
        }
        return null;

      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon!;
  const menuIcon = menu.icon ? (
    <Icon
      strokeWidth={1.5}
      size="1.3rem"
      style={{ marginTop: "auto", marginBottom: "auto" }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: selected === menu.id ? 8 : 6,
        height: selected === menu.id ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `${borderRadius}px`,
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: !selected ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemIcon sx={{ my: "auto", minWidth: !menu.icon ? 18 : 36 }}>
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={selected === menu.id ? "h5" : "body1"}
              color="inherit"
              sx={{ my: "auto" }}
            >
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" display="block" gutterBottom>
                {menu.caption}
              </Typography>
            )
          }
        />
        {open ? (
          <IconChevronUp
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        ) : (
          <IconChevronDown
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {open && (
          <List
            component="div"
            disablePadding
            sx={{
              position: "relative",
              "&:after": {
                content: "''",
                position: "absolute",
                left: "32px",
                top: 0,
                height: "100%",
                width: "1px",
                opacity: theme.palette.mode === "dark" ? 0.2 : 1,
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
              },
            }}
          >
            {menus}
          </List>
        )}
      </Collapse>
    </>
  );
};

export default NavCollapse;
