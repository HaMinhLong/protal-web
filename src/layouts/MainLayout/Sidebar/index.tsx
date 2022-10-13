// THIRD-PARTY
import { Box, Drawer, Stack, useMediaQuery } from "@mui/material";
import { memo, useMemo } from "react";
import { useTheme } from "@mui/material/styles";

// PROJECT IMPORTS
import Chip from "components/Extended/Chip";
import LogoSection from "../LogoSection";
import MenuList from "./MenuList";
import { drawerWidth } from "app/constant";
import { openDrawer } from "features/menu/menuSlice";
import { useDispatch, useSelector, RootState } from "app/store";

interface SidebarProps {
  window?: Window;
}

const Sidebar = ({ window }: SidebarProps) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state: RootState) => state.menu);

  const logo = useMemo(
    () => (
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
          <LogoSection />
        </Box>
      </Box>
    ),
    []
  );

  const drawer = useMemo(
    () => (
      <div
        style={{
          height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <MenuList />
        <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
          <Chip
            label={process.env.REACT_APP_VERSION}
            disabled
            chipColor="secondary"
            size="small"
            sx={{ cursor: "pointer" }}
          />
        </Stack>
      </div>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matchUpMd]
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : "auto" }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={() => dispatch(openDrawer(!drawerOpen))}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "88px",
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawerOpen && logo}
        {drawerOpen && drawer}
      </Drawer>
    </Box>
  );
};

export default memo(Sidebar);
