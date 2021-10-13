import { Grid } from "@mui/material";
import { Pack } from "../interfaces/Pack";
import StorePack from "./StorePack";


export default function StorePackDisplay({ packs }: {packs: Pack[]}) {
    return(
        <Grid container spacing={1} justifyContent='center' padding={2}>
            {packs.map(pack => (
                <Grid item key={pack.id}> 
                    <StorePack pack={pack}/>
                </Grid>
            ))}
        </Grid>
    )
}