import './AccountTransfer.css';
import { useState } from "react";
import { UserSearchResult } from "../interfaces/UserSearchResult";
import Navbar from "../Navigation/Navbar";
import AccountSelector from "./AccountSelector";
import { getAllItemIds, getUserCollections } from '../api/api';
import { useAuth } from '../App';
import { UserCollection } from '../interfaces/UserCollection';

interface TradeItem {
    id: number
    type: 'card' | 'sticker'
}

export default function AccountTransfer() {
    const [selectedUser, setSelectedUser] = useState({} as UserSearchResult);
    const [tradeItems, setTradeItems] = useState([] as TradeItem[]);
    const auth = useAuth();

    function handleUserSelect(user: UserSearchResult) {
        setSelectedUser(user);
    }

    async function scanUserItems() {
        if (!selectedUser.id)
            return;
        const collections = await getUserCollections(auth.user.jwt, selectedUser.id, 1);
        const items: TradeItem[] = [];
        collections.forEach(async (coll: UserCollection) => {
            if (coll.count === 0)
                return;
            for (const type of coll.collection.properties.entity_types) {
                if (type !== 'card' && type !== 'sticker')
                    continue;
                const ids = await getAllItemIds(auth.user.jwt, selectedUser.id, coll.collection.id, type, 1);
                for (const id of ids) {
                    items.push({id: id, type: type})
                }
            }
            setTradeItems([...tradeItems, ...items]);
            console.log(`${coll.collection.name} added.`)
        })
    }

    return(
        <div className='accTransferContainer'>
            <Navbar/>
            <AccountSelector onUserSelect={user => handleUserSelect(user)}/>
            <button onClick={() => scanUserItems()}>Start Transfer</button>
            <p>{tradeItems.length}</p>
        </div>
    )
}