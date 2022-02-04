import { useStyles } from './styles';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const products = useSelector(state => state.productReducer);
    //return an array containing selected item so array.length==totalItems selected by user
    const totalItems = products.filter(item => item.isSelected === true);
    const pages = ['Home', 'About', 'Products', <Badge badgeContent={totalItems.length} color="primary"><AddShoppingCartIcon /></Badge>];
    const settings = ['Home', 'About', 'Products', 'Cart'];
    const linkToRoutes = ['/', 'about', 'products', 'addToCart']
    const link=['/','/about','/products','/addToCart']
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const classes = useStyles();
    let currentRoute = null;

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

    const highLightRoute = (event) => {
        if (currentRoute)
            currentRoute.style.border = null;
        currentRoute = event.target;
        currentRoute.style.border = '2px solid #233dff';
    }

    
    return (
        <AppBar className={classes.appBar} position="static">
            <Container className={classes.appBar} maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="logo.png" alt="logo" className={classes.logo} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color='primary'
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
                            {pages.map((page, i) => (
                                <Link key={i} to={linkToRoutes[i]}>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography fontWeight='400' className={classes.pagesColor} textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src="logo.png" alt="logo" className={classes.logo} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, i) => (
                            <Link key={i} to={linkToRoutes[i]} onClick={(e) => { highLightRoute(e) }}>
                                <Button className={classes.pages}
                                    key={page}
                                    onClick={handleCloseNavMenu, (e) => { highLightRoute(e) }}
                                    sx={{ my: 2, color: '#233dff', fontWeight: '400', fontSize: 16, display: 'block' }}
                                    // selected={pathname === link}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Designer" sx={{ bgcolor: "#233dff" }}>D</Avatar>
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
                            {settings.map((setting, i) => (
                                <MenuItem key={i} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
