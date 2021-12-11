import { useEffect, useState } from "react";
import BaseContainer from "../BaseComponents/BaseContainer";

type Props = {
    user: string
}

export default function TradeOverview({user}: Props) {
    const defaultDescription = 'Please select a user first.';
    const [description, setDescription] = useState(defaultDescription);

    useEffect(() => {
        user 
            ? setDescription(`Confirm to accept all Trades from ${user}`) 
            : setDescription(defaultDescription);
    }, [user])

    useEffect(() => {
        getTrades();
    })

    function getTrades() {

    }

    return(
        <BaseContainer title='Accept Trades' description={description}>
            
        </BaseContainer>
    )
}