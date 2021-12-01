import { Grid } from "@mui/material";
import Navbar from "../Navigation/Navbar";
import AccountSelector from "./AccountSelector";

export default function AccountTransfer() {
    return(
        <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
                <Navbar />
            </Grid>

            <Grid item xs={12}>
                <AccountSelector/>
            </Grid>
        </Grid>
    )
}