import './AccountTransfer.css';
import { useEffect, useState } from "react";
import { UserSearchResult } from "../interfaces/UserSearchResult";
import AccountSelector from "./AccountSelector";
import { getAllItemIds, getUserCollections } from '../api/api';
import { useAuth } from '../App';
import { UserCollection } from '../interfaces/UserCollection';
import BaseButton from '../BaseComponents/BaseButton';
import ProgressBar from '../BaseComponents/ProgressBar';
import FilterSelector from './FilterSelector';

interface TradeItem {
    id: number
    type: 'card' | 'sticker'
}

export default function AccountTransfer() {
    const [selectedUser, setSelectedUser] = useState({} as UserSearchResult);
    const [tradeItems, setTradeItems] = useState([] as TradeItem[]);
    const [collectionProgress, setCollectionProgress] = useState(0);
    const [totalCollections, setTotalCollections] = useState(0);
    const [allowedSeasons, setAllowedSeasons] = useState([] as string[]);
    const auth = useAuth();

    function handleUserSelect(user: UserSearchResult) {
        setSelectedUser(user);
    }

    async function scanUserItems() {
        const collections = await getUserCollections(auth.user.jwt, auth.user.id, 1);
        setTotalCollections(collections.length);
        setTradeItems([]);
        setCollectionProgress(0);
        const items: TradeItem[] = [];
        collections.forEach(async (coll: UserCollection) => {
            if (coll.count === 0 || !allowedSeasons.some((season: string) => coll.collection.properties.seasons.includes(season))) {
                setCollectionProgress(c => c + 1);
                return;
            }
            for (const type of coll.collection.properties.entity_types) {
                if (type !== 'card' && type !== 'sticker')
                    continue;
                const ids = await getAllItemIds(auth.user.jwt, auth.user.id, coll.collection.id, type, 1);
                for (const id of ids) {
                    items.push({id: id, type: type})
                }
            }
            setTradeItems([...tradeItems, ...items]);
        })
    }

    function handleSeasonSelect(seasons: string[]) {
        setAllowedSeasons(seasons);
    }

    useEffect(() => setCollectionProgress(c => c + 1), [tradeItems])

    return(
        <div className='accTransferContainer'>
            {totalCollections > 0 && collectionProgress < totalCollections ?
                <ProgressBar max={totalCollections} progress={collectionProgress}/>
            : <></>}
            <AccountSelector onUserSelect={user => handleUserSelect(user)}/>
            <FilterSelector onChange={handleSeasonSelect}/>
            <BaseButton onClick={() => scanUserItems()}>Start Transfer</BaseButton>
            <p>{tradeItems.length}</p>
        </div>
    )
}