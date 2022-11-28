// THIRD-PARTY
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, Typography } from '@mui/material';
import { IconMenu2 } from '@tabler/icons';

// PROJECT IMPORTS
// import LocalizationSection from "layouts/Header/LocalizationSection";
import ProfileSection from 'layouts/Header/ProfileSection';
import { useDispatch, useSelector, RootState } from 'app/store';
import { openDrawer } from 'features/menu/menuSlice';
import NotificationSection from 'layouts/Header/NotificationSection';

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state: RootState) => state.menu);
  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            overflow: 'hidden',
            transition: 'all .2s ease-in-out',
            background: 'transparent',
            color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
            cursor: 'pointer'
          }}
          onClick={() => dispatch(openDrawer(!drawerOpen))}
          color="inherit"
        >
          <IconMenu2 stroke={1.5} size="1.5rem" />
        </Avatar>
        <Typography sx={{ color: theme.palette.background.paper, textTransform: 'uppercase', fontStyle: 'italic' }} variant="h4">
          Protal Website
        </Typography>
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
