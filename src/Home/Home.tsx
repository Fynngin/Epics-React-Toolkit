import SpinnerOdds from "./SpinnerOdds";
import PackStock from "./PackStock";
import { Grid } from "@mui/material";


export default function Home() {
    return(
        <Grid container spacing={2} p={2}>
            <Grid item lg={6} sm={12}>
                <PackStock />
            </Grid>
            <Grid item lg={6} sm={12}>
                <SpinnerOdds />
            </Grid>
        </Grid>
    )
}