import SpinnerOdds from "./SpinnerOdds";
import PackStock from "./PackStock";
import { Grid } from "@mui/material";
import Navbar from "../Navigation/Navbar";


export default function Home() {
    return(
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>
            <Grid item lg={6} sm={12}>
                <PackStock />
            </Grid>
            <Grid item lg={6} sm={12}>
                <SpinnerOdds />
            </Grid>
        </Grid>
    )
}