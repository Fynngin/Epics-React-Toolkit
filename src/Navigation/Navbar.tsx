import { CompareArrows, Group, Home, Menu as MenuIcon, Restaurant, Search, Sell, SportsEsports } from "@mui/icons-material";
import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { MouseEvent, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useHistory } from "react-router";

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
            icon: <Home />, 
            isActive: isActiveRoute('/'), 
            path: '/',
            disabled: false
        },
        {
            name: 'Mint Search', 
            icon: <Search />, 
            isActive: isActiveRoute('/mintsearch'), 
            path: '/mintsearch',
            disabled: true
        },
        {
            name: 'Mass List', 
            icon: <Sell />, 
            isActive: isActiveRoute('/masslist'), 
            path: '/masslist',
            disabled: true
        },
        {
            name: 'Rush Games', 
            icon: <SportsEsports />, 
            isActive: isActiveRoute('/rushgames'), 
            path: '/rushgames',
            disabled: true
        },
        {
            name: 'Rush Team Builder', 
            icon: <Group />, 
            isActive: isActiveRoute('/rushteam'), 
            path: '/rushteam',
            disabled: true
        },
        {
            name: 'Account Transfer', 
            icon: <CompareArrows />, 
            isActive: isActiveRoute('/accounttransfer'), 
            path: '/accounttransfer',
            disabled: false
        },
        {
            name: 'Pack Opener', 
            icon: <Restaurant />, 
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
        <>
            <BrowserView>
                <Grid container spacing={1}>
                    {routes.map((route: Route) => (
                        <Grid item key={route.path}>
                            <Button 
                                variant={route.isActive ? 'contained' : 'outlined'}
                                disabled={route.disabled}
                                onClick={() => handleNavButtonClick(route)}
                            >
                                {route.icon}&nbsp;
                                {route.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </BrowserView>
            <MobileView>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton 
                            color='primary'
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                            onClick={handleMenuClick}
                        >
                            <MenuIcon/>
                        </IconButton>
                        Menu
                        <Menu
                            id='nav-menu'
                            anchorEl={menuAnchor}
                            open={openMenu}
                            onClose={handleMenuClose}
                        >
                            {routes.map((route: Route) => (
                                <MenuItem
                                    key={route.path}
                                    disabled={route.disabled}
                                    onClick={() => handleNavButtonClick(route)}
                                >
                                    {route.icon}&nbsp;
                                    {route.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </MobileView>
        </>
    )
}