import { CompareArrows, Group, Home, Restaurant, Search, Sell, SportsEsports } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { BrowserView, MobileView } from "react-device-detect";

export default function Navbar() {
    const routes = [
        {name: 'Home', icon: <Home />, isActive: true},
        {name: 'Mint Search', icon: <Search />, isActive: false},
        {name: 'Mass List', icon: <Sell />, isActive: false},
        {name: 'Rush Games', icon: <SportsEsports />, isActive: false},
        {name: 'Rush Team Builder', icon: <Group />, isActive: false},
        {name: 'Account Transfer', icon: <CompareArrows />, isActive: false},
        {name: 'Pack Opener', icon: <Restaurant />, isActive: false},
    ]

    return(
        <>
            <BrowserView>
                <Grid container spacing={1}>
                    {routes.map(route => (
                        <Grid item>
                            <Button variant={route.isActive ? 'contained' : 'outlined'}>
                                {route.icon}&nbsp;
                                {route.name}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </BrowserView>
            <MobileView>
                <div></div>
            </MobileView>
        </>
    )
}