// THIRD-PARTY
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { forwardRef, ForwardRefExoticComponent, RefAttributes, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// PROJECT IMPORTS
import useConfig from 'hooks/useConfig';
import { useDispatch, useSelector } from 'app/store';
import { activeItem, openDrawer } from 'features/menu/menuSlice';
import { LinkTarget, NavItemType } from 'types';

interface NavItemProps {
  item: NavItemType;
  level: number;
}

const NavItem = ({ item, level }: NavItemProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { openItem } = useSelector((state) => state.menu);

  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const isSelected = openItem.findIndex((id) => id === item.id) > -1;

  const { borderRadius } = useConfig();

  const Icon = item?.icon!;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: openItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height: openItem.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url!} target={itemTarget} />)
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    dispatch(activeItem([id]));
    matchesSM && dispatch(openDrawer(false));
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeItem([item.id!]));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `${borderRadius}px`,
        mb: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent !important' : isSelected ? `${theme.palette.primary.dark} !important` : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`
      }}
      selected={openItem?.findIndex((id) => id === item.id) > -1}
      onClick={() => itemHandler(item.id!)}
    >
      <ListItemIcon
        sx={{
          my: 'auto',
          minWidth: !item?.icon ? 18 : 36,
          color: `${isSelected && level === 1 ? theme.palette.background.paper : theme.palette.primary.dark} !important`
        }}
      >
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={openItem?.findIndex((id) => id === item.id) > -1 ? 'h5' : 'body1'}
            sx={{ fontWeight: 700 }}
            color={isSelected && level === 1 ? '#fff' : 'inherit'}
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
