import { faBoxOpen, faExchangeAlt, faGamepad, faHome, faSearch, faTags, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useHistory } from "react-router";
import './Navbar.css';

interface Route {
    name: string
    icon: JSX.Element
    isActive: boolean
    path: string
    disabled: boolean
}


export default function Navbar() {
    const history = useHistory();

    const isActiveRoute = (routeName: string) => {
        return routeName === history.location.pathname;
    }

    const routes: Route[] = [
        {
            name: 'Home', 
            icon: <FontAwesomeIcon icon={faHome} />, 
            isActive: isActiveRoute('/'), 
            path: '/',
            disabled: false
        },
        {
            name: 'Mint Search', 
            icon: <FontAwesomeIcon icon={faSearch} />, 
            isActive: isActiveRoute('/mintsearch'), 
            path: '/mintsearch',
            disabled: true
        },
        {
            name: 'Mass List', 
            icon: <FontAwesomeIcon icon={faTags} />, 
            isActive: isActiveRoute('/masslist'), 
            path: '/masslist',
            disabled: true
        },
        {
            name: 'Rush Games', 
            icon: <FontAwesomeIcon icon={faGamepad} />, 
            isActive: isActiveRoute('/rushgames'), 
            path: '/rushgames',
            disabled: true
        },
        {
            name: 'Rush Team Builder', 
            icon: <FontAwesomeIcon icon={faUsers} />, 
            isActive: isActiveRoute('/rushteam'), 
            path: '/rushteam',
            disabled: true
        },
        {
            name: 'Account Transfer', 
            icon: <FontAwesomeIcon icon={faExchangeAlt} />, 
            isActive: isActiveRoute('/accounttransfer'), 
            path: '/accounttransfer',
            disabled: false
        },
        {
            name: 'Pack Opener', 
            icon: <FontAwesomeIcon icon={faBoxOpen} />, 
            isActive: isActiveRoute('/packopener'), 
            path: '/packopener',
            disabled: true
        }
    ]

    const handleNavButtonClick = (route: Route) => {
        const from: any = history.location.state || { from: { pathname: '/' } };
        history.replace(from);
        history.push(route.path);
    }

    const handleMenuClick = (evt: MouseEvent<HTMLButtonElement>) => {
        setMenuAnchor(evt.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(menuAnchor)

    return(
        <header>
            <input type='checkbox' id='navToggle' className='navToggle'/>
            <nav>
                <ul>
                    {routes.map((route: Route) => (
                        <li key={route.path}>
                            <a href='#'>
                                {route.icon ? route.icon : route.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <label htmlFor='navToggle' className='navToggleLabel'>
                <span></span>
            </label>
        </header>
        // <>
        //     <BrowserView>
        //         <Grid container spacing={1}>
        //             {routes.map((route: Route) => (
        //                 <Grid item key={route.path}>
        //                     <Button 
        //                         variant={route.isActive ? 'contained' : 'outlined'}
        //                         disabled={route.disabled}
        //                         onClick={() => handleNavButtonClick(route)}
        //                     >
        //                         {route.icon}&nbsp;
        //                         {route.name}
        //                     </Button>
        //                 </Grid>
        //             ))}
        //         </Grid>
        //     </BrowserView>
        //     <MobileView>
        //         <AppBar position='static'>
        //             <Toolbar>
        //                 <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
        //                     Menu
        //                 </Typography>
        //                 <IconButton 
        //                     color='primary'
        //                     aria-controls="basic-menu"
        //                     aria-haspopup="true"
        //                     aria-expanded={openMenu ? 'true' : undefined}
        //                     onClick={handleMenuClick}
        //                 >
        //                     <MenuIcon/>
        //                 </IconButton>
        //                 <Menu
        //                     id='nav-menu'
        //                     anchorEl={menuAnchor}
        //                     open={openMenu}
        //                     onClose={handleMenuClose}
        //                 >
        //                     {routes.map((route: Route) => (
        //                         <MenuItem
        //                             key={route.path}
        //                             disabled={route.disabled}
        //                             onClick={() => handleNavButtonClick(route)}
        //                         >
        //                             {route.icon}&nbsp;
        //                             {route.name}
        //                         </MenuItem>
        //                     ))}
        //                 </Menu>
        //             </Toolbar>
        //         </AppBar>
        //     </MobileView>
        // </>
    )
}