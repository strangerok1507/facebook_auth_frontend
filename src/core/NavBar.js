import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import {Menu as MenuIcon, Star as StarIcon} from '@mui/icons-material';

import {Link} from 'react-router-dom';


function ResponsiveAppBar({isLoggedIn, setIsLoggedIn, user, setUser}) {

    const routes = [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About'},
    ];
    const settings = ['Profile', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogOut = () => {
        setIsLoggedIn(false);
        setUser(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StarIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to='/'
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {routes.map((route) => (
                                <MenuItem key={route.label} component={Link} to={route.path}>
                                    <Typography textAlign="center">{route.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <StarIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {routes.map((route) => (
                            <Button
                                key={route.label}
                                component={Link}
                                to={route.path}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {route.label}
                            </Button>
                        ))}
                    </Box>


                    {!!isLoggedIn ? (
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt={user.name} src={user.picture.data.url}/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
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
                                    {settings.map((option) => (
                                        <MenuItem key={option} onClick={handleCloseUserMenu}>
                                            {
                                                option === 'Logout' ?
                                                    <Typography textAlign="center"
                                                                onClick={handleLogOut}>{option} </Typography>
                                                    :
                                                    <Typography textAlign="center">{option}</Typography>
                                            }

                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        ) :
                        <Box sx={{flexGrow: 0}}>
                            <MenuItem component={Link} to="/login">
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
}

export default ResponsiveAppBar;