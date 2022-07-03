import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
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
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../Images/logo.jpeg'

import Health from '../Components/Categories/Health'
import Education from '../Components/Categories/Education'
import Ecommerce from '../Components/Categories/Ecommerce'
import Agriculture from '../Components/Categories/Agriculture'

import avatar from '../Images/avatar.jpg'
import Profile from '../Pages/Profile';

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
  const [itemStyle, setItemStyle] = React.useState('Health')
  const [profile, setProfile] = React.useState(false)
  

  const displayEducation = () => {
    setAgriculture(false)
    setEducation(true)
    setEcommerce(false)
    setHealth(false)
    setProfile(false)
    setItemStyle('Education')
  }

  const displayAgriculture = () => {
    setAgriculture(true)
    setEducation(false)
    setEcommerce(false)
    setHealth(false)
    setProfile(false)
    setItemStyle('Agriculture')
  }

  const displayHealth = () => {
    setAgriculture(false)
    setEducation(false)
    setEcommerce(false)
    setHealth(true)
    setProfile(false)
    setItemStyle('Health')
  }

  const displayEcommerce = () => {
    setAgriculture(false)
    setEducation(false)
    setEcommerce(true)
    setHealth(false)
    setProfile(false)
    setItemStyle('Ecommerce')
  }

  const displayProfile = () => {
    setAgriculture(false)
    setEducation(false)
    setEcommerce(false)
    setHealth(false)
    setProfile(true)
    setItemStyle('Profile')
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
    <Box sx={{ display: 'flex' }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}
      style={{
        backgroundColor: '#373959'
      }}
      >
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

            <div style={{display: 'flex', alignItems: 'center'}}>
            <div><img src={Logo} style={{height: '40px', width: '40px'}} alt="LOGO" /></div>
            <div style={{marginLeft: 10, fontSize: '18px'}}>DigiAccess</div>
            </div>
          
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
        PaperProps={{
          sx: {
            backgroundColor: "#373959"
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
        >
            <ListItem button 
            style={{
              backgroundColor: itemStyle === 'Education' ? '#fff' : '' ,
              color: itemStyle === 'Education' ? 'blue' : '#fff'
            }}
            onClick={displayEducation}
            >
              <ListItemIcon>
                <SchoolIcon 
                style={{
                  color: itemStyle === 'Education' ? 'blue' : '#fff'
                }}
                />
              </ListItemIcon>
              <ListItemText primary='Education' />
            </ListItem>

            <ListItem button 
            style={{
              backgroundColor: itemStyle === 'Health' ? '#fff' : '' ,
              color: itemStyle === 'Health' ? 'blue' : '#fff'
            }}
            onClick={displayHealth}
            >
              <ListItemIcon>
                <HealthAndSafetyIcon 
                style={{
                  color: itemStyle === 'Health' ? 'blue' : '#fff'
                }}
                />
              </ListItemIcon>
              <ListItemText primary='Health' />
            </ListItem>

            <ListItem button 
            style={{
              backgroundColor: itemStyle === 'Agriculture' ? '#fff' : '' ,
              color: itemStyle === 'Agriculture' ? 'blue' : '#fff'
            }}
            onClick={displayAgriculture}
            >
              <ListItemIcon>
                <AgricultureIcon 
                style={{
                  color: itemStyle === 'Agriculture' ? 'blue' : '#fff'
                }}
                />
              </ListItemIcon>
              <ListItemText primary='Agriculture' />
            </ListItem>

            <ListItem button 
            style={{
              backgroundColor: itemStyle === 'Ecommerce' ? '#fff' : '' ,
              color: itemStyle === 'Ecommerce' ? 'blue' : '#fff'
            }}
            onClick={displayEcommerce}
            >
              <ListItemIcon>
                <ShoppingCartIcon 
                style={{
                  color: itemStyle === 'Ecommerce' ? 'blue' : '#fff'
                }}
                />
              </ListItemIcon>
              <ListItemText primary='Ecommerce' />
            </ListItem>
          
        </List>
        <Divider />
        <List>

            <ListItem button 
            onClick={displayProfile}
            style={{
              backgroundColor: itemStyle === 'Profile' ? '#fff' : '' ,
              color: itemStyle === 'Profile' ? 'blue' : '#fff'
            }}
            >
              <ListItemIcon>
                <AccountCircleIcon 
                style={{
                  color: itemStyle === 'Profile' ? 'blue' : '#fff'
                }}
                />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItem>


            <ListItem button 
            style={{
              color: '#fff'
            }}
            >
              <ListItemIcon>
                <LogoutIcon 
                style={{
                  color: '#fff'
                }}
                />
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

        {profile && ( <Profile />)}

        </Main>
    </Box>
  );
}