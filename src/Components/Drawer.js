import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SchoolIcon from '@mui/icons-material/School';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import Health from '../Components/Categories/Health'
import Education from '../Components/Categories/Education'
import Ecommerce from '../Components/Categories/Ecommerce'
import Agriculture from '../Components/Categories/Agriculture'

import avatar from '../Images/avatar.PNG'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {

  const [health, setHealth] = React.useState(true)
  const [education, setEducation] = React.useState(false)
  const [ecommerce, setEcommerce] = React.useState(false)
  const [agriculture, setAgriculture] = React.useState(false)

  const displayEducation = () => {
    setAgriculture(false)
    setEducation(true)
    setEcommerce(false)
    setHealth(false)
  }

  const displayAgriculture = () => {
    setAgriculture(true)
    setEducation(false)
    setEcommerce(false)
    setHealth(false)
  }

  const displayHealth = () => {
    setAgriculture(false)
    setEducation(false)
    setEcommerce(false)
    setHealth(true)
  }

  const displayEcommerce = () => {
    setAgriculture(false)
    setEducation(false)
    setEcommerce(true)
    setHealth(false)
  }


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1}}>
          <Typography variant="h6" noWrap component="div" >
            DigiAccess
          </Typography>
          </Box>

          <Box>
          <Tooltip title="Ghani Rehman">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar  } />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem button 
            onClick={displayEducation}
            >
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary='Education' />
            </ListItem>

            <ListItem button 
            onClick={displayHealth}
            >
              <ListItemIcon>
                <HealthAndSafetyIcon />
              </ListItemIcon>
              <ListItemText primary='Health' />
            </ListItem>

            <ListItem button 
            onClick={displayAgriculture}
            >
              <ListItemIcon>
                <AgricultureIcon />
              </ListItemIcon>
              <ListItemText primary='Agriculture' />
            </ListItem>

            <ListItem button 
            onClick={displayEcommerce}
            >
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary='Ecommerce' />
            </ListItem>
          
        </List>
        <Divider />
        <List>

            <ListItem button >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItem>

            <ListItem button >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItem>

            <ListItem button >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        { health && ( <Health /> ) }

        { education && ( <Education /> ) }

        { ecommerce && ( <Ecommerce /> ) }

        { agriculture && ( <Agriculture /> ) }
        </Main>
    </Box>
  );
}
