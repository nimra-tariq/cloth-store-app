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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link,NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';
import SignIn from '../../signInForm/signIn';
import Card from '@material-ui/core//Card';
import CardContent from '@material-ui/core//CardContent';
import '../styles.css'

const NavBar = () => {

    const products = useSelector(state => state.productReducer);
    //return an array containing selected item so array.length==totalItems selected by user
    const totalItems = products.filter(item => item.isSelected === true);
    const pages = ['Home', 'About', 'Products', <Badge badgeContent={totalItems.length} color="primary"><AddShoppingCartIcon /></Badge>];
    const linkToRoutes = ['/', 'about', 'products', 'addToCart']
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const classes = useStyles();
    const user = useSelector(state => state.userReducer)

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
                            <NavLink key={i} to={linkToRoutes[i]} className={classes.pages}>
                                    {page}
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                                {(user.signedIn)?<Avatar alt="Designer" sx={{ bgcolor: "#233dff" }}>{user.uemail.charAt(0).toUpperCase()}</Avatar>: <Avatar src="/broken-image.jpg" sx={{ bgcolor: "#233dff" }}/>}
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
                            {(!user.signedIn)?<SignIn></SignIn>:
                            <div className="container"><Box sx={{ minWidth: 230 }} className={classes.box} >
                            <Card variant="outlined">
                              <Card sx={{ minWidth: 230 }}>
                                <CardContent>
                                  <Typography  variant="h6">
                                    Thank you for registering your customer account pin is 
                                    <br />
                                  </Typography>
                                  <Typography className={classes.title} variant="h5">
                                    {user.upin}
                                    <br />
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Card>
                          </Box></div>
                            }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
