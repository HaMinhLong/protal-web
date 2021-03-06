// THIRD-PARTY
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";
import { IconMenu2 } from "@tabler/icons";

// PROJECT IMPORTS
// import LocalizationSection from "layouts/Header/LocalizationSection";
import ProfileSection from "layouts/Header/ProfileSection";
import { useDispatch, useSelector, RootState } from "app/store";
import { openDrawer } from "features/menu/menuSlice";
import LogoSection from "layouts/MainLayout/LogoSection";
import NotificationSection from "layouts/Header/NotificationSection";

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state: RootState) => state.menu);
  return (
    <>
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              overflow: "hidden",
              transition: "all .2s ease-in-out",
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : theme.palette.secondary.light,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.main
                  : theme.palette.secondary.dark,
              "&:hover": {
                background:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.main
                    : theme.palette.secondary.dark,
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.secondary.light
                    : theme.palette.secondary.light,
              },
            }}
            onClick={() => dispatch(openDrawer(!drawerOpen))}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>
      {/* <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        <LogoSection />
      </Box> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
};

export default Header;
