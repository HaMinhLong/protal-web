import { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from '@mui/material';

// third-party

// project imports
import MainCard from 'components/Cards/MainCard';
import Transitions from 'components/Extended/Transitions';
import User1 from 'assets/images/users/user-round.svg';
import useAuth from 'hooks/useAuth';

// assets
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (event: any) => {
    setOpen(false);
  };

  const handleListItemClick = (event: any, index: any, route = '') => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== '') {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '34px',
          alignItems: 'center',
          transition: 'all .2s ease-in-out',
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.background.paper} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box sx={{ p: 2 }}>
                    <Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="h4">Xin chào,</Typography>
                        <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                          {user?.fullName}
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle2">Protal CMS</Typography>
                    </Stack>
                    <Divider />
                  </Box>
                  <div
                    style={{
                      height: '100%',
                      maxHeight: 'calc(100vh - 250px)',
                      overflowX: 'hidden'
                    }}
                  >
                    <Box sx={{ p: 0 }}>
                      <List
                        component="nav"
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%'
                          }
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `50px`
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) => handleListItemClick(event, 0, '/user/account-profile/profile1')}
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Cài đặt tài khoản</Typography>} />
                        </ListItemButton>

                        <ListItemButton
                          sx={{
                            borderRadius: `50px`
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">Đăng xuất</Typography>} />
                        </ListItemButton>
                      </List>
                    </Box>
                  </div>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
