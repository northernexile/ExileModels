import React, { useEffect, useState } from "react"
import { AppBar, Avatar, Box, Button, Container, IconButton, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import { Menu } from '@mui/material';
import Logo from '../assets/Logo.svg';
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import Cookies from 'js-cookie';
import UserProfile from './user/profile/UserProfile';
import Profile from '../pages/Profile';
import { ProfileInterface } from "../models/user/profile/profile.interface";

const ExileAppBar = () => {

 const links = [
    {title:'Models',path:'/models'},
    {title:'Web Throttle',path:'/throttle'},
    {title:'Blog',path:'/blog'},
    {title:'Contact',path:'/contact'},
    {title:'About',path:'/about'}
  ]
 const profileSettings = [
    {title:'Profile',path:'/profile'},
    {title:'Account',path:'/account'},
    {title:'Dashboard',path:'/admin'},
  ]

  const getAccessToken = () => {
    const token:any = Cookies.get('token');
    return token;
  }
  
  const isAuthenticated = () => {
      return !!getAccessToken();
  }

  const [profileName,setProfileName] = useState('?')

  useEffect(() =>{
    const profile:ProfileInterface = UserProfile()
    setProfileName(profile.profile?.name ?? '?')
  })

  const loginLink = !isAuthenticated() ? {title:'Login',path:'/login'} : {title:'Logout',path:'/logout'}
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
            component="img"
            sx={{width:210,height:50}}
            alt="Exile Models"
            src={Logo}
        />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link style={{textDecoration:'none'}} color="inherit" component={RouterLink} to={page.path}>
                    <Typography sx={{textDecoration:'none'}} textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box
            component="img"
            sx={{
            width: 210,height:50
            }}
            alt="Exile Models"
            src={Logo}
        />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {links.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',textDecoration:'none' }}
              >
                <Link style={{textDecoration:'none'}} color="inherit" component={RouterLink} to={page.path}>
                  <Typography sx={{
                    textDecoration:'none'
                  }} variant="body1" component={'span'}>{page.title}</Typography>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={profileName} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profileSettings.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Link style={{textDecoration:'none'}} component={RouterLink} to={setting.path}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem key={loginLink.title} onClick={handleCloseUserMenu}>
                <Link style={{textDecoration:'none'}} component={RouterLink} to={loginLink.path}>
                  <Typography textAlign={"center"}>{loginLink.title}</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ExileAppBar;