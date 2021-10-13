import { Button, Grid } from "@mui/material";
import { BrowserView, MobileView } from "react-device-detect";

export default function Navbar() {
    return(
        <>
            <BrowserView>
                <Grid container>
                    <Grid item>
                        <Button>Mint Search</Button>
                    </Grid>
                    <Grid item>
                        <Button>Mass List</Button>
                    </Grid>
                    <Grid item>
                        <Button>Rush Games</Button>
                    </Grid>
                    <Grid item>
                        <Button>Rush Team Builder</Button>
                    </Grid>
                    <Grid item>
                        <Button>Account Transfer</Button>
                    </Grid>
                    <Grid item>
                        <Button>Pack Opener</Button>
                    </Grid>
                </Grid>
            </BrowserView>
            <MobileView>
                <div></div>
            </MobileView>
        </>
    )
}