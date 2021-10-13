import SpinnerOddsTable from "./SpinnerOddsTable";
import SpinnerOddsChart from "./SpinnerOddsChart";
import { Card, CardActions, CardContent, CardHeader, Collapse, IconButton } from "@mui/material";
import { ExpandMore as ExpandMoreIcon, Redeem } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { useAuth } from "../App";
import { useEffect, useState } from "react";
import { Spinner } from "../interfaces/Spinner";
import { getSpinner } from "../api/api";
import { SpinnerItem } from "../interfaces/SpinnerItem";

const ExpandMore = styled((props: {expand: boolean, onClick: () => void}) => {
  const { expand: boolean, ...other } = props;
  return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function sortSpinnerOddsByChance(spinner: Spinner) {
    return spinner.items.sort((a: SpinnerItem, b: SpinnerItem) => b.chance - a.chance);
}

export default function SpinnerOdds() {
    const auth = useAuth();
    const [spinner, setSpinner] = useState({} as Spinner);
    const [expandSpinnerOddsTable, setExpandSpinnerOddsTable] = useState(false);

    useEffect(() => {
        const initSpinnerOdds = async () => {
            let spinnerOdds = await getSpinner(auth.user.jwt, 1);
            spinnerOdds.items = sortSpinnerOddsByChance(spinnerOdds);
            setSpinner(spinnerOdds);
        }

        initSpinnerOdds();
    }, [auth]);

    return(
        <Card>
            <CardHeader title='Spinner Odds' avatar={<Redeem/>}/>
            <CardContent>
                <div className='h-60'>
                    <SpinnerOddsChart spinner={spinner}/>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expandSpinnerOddsTable}
                    onClick={() => setExpandSpinnerOddsTable(!expandSpinnerOddsTable)}
                    aria-expanded={expandSpinnerOddsTable}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expandSpinnerOddsTable} timeout="auto" unmountOnExit>
                <CardContent>
                    <SpinnerOddsTable spinner={spinner} />
                </CardContent>
            </Collapse>
        </Card> 
    )
}