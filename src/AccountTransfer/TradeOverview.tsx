import { useCallback, useEffect, useState } from "react";
import { getIncomingTrades } from "../api/api";
import { useAuth } from "../App";
import BaseContainer from "../BaseComponents/BaseContainer";
import { Trade } from "../interfaces/Trade";

type Props = {
    user: string
}

export default function TradeOverview({user}: Props) {
    const defaultDescription = 'Please select a user first.';
    const [description, setDescription] = useState(defaultDescription);
    const [trades, setTrades] = useState([] as Trade[]);
    const [loading, setLoading] = useState(false);
    const auth = useAuth();

    const getTrades = useCallback(async () => {
        setLoading(true);
        const newTrades: Trade[] = await getIncomingTrades(auth.user.jwt, 1, auth.user.id);
        setTrades(newTrades);
        setLoading(false);
    }, [auth]);

    const handleUserSelect = useCallback(() => {
        setDescription(`Confirm to accept all Trades from ${user}`) 
        getTrades();
    }, [user, getTrades]);

    useEffect(() => {
        user 
            ? handleUserSelect()
            : setDescription(defaultDescription);
    }, [user, handleUserSelect])

    return(
        <BaseContainer title='Accept Trades' description={description} loading={loading}>
            <div>
                <h3>Incoming Trades:</h3>
                <p>{trades.length}</p>
            </div>
        </BaseContainer>
    )
}