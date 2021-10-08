import { useEffect, useState } from "react"
import { getStorePacks } from "../api/api";
import { useAuth } from "../App"
import { Pack } from "../interfaces/Pack";
import StorePackDisplay from "./StorePackDisplay";
import { CurrencyDollarIcon } from '@heroicons/react/solid';

function filterActivePacks(packs: Pack[]) {
    const today = new Date();
    return packs.filter(pack => {
        if (pack.purchaseEnd !== undefined) {
            if (new Date(pack.purchaseEnd) > today && pack.inventoryCount > 0)
                return true;
        }
        return false;
    })
}

function sortPacksByInventoryCount(packs: Pack[]) {
    return packs.sort((a, b) => b.inventoryCount - a.inventoryCount)
}

export default function Home() {
    const auth = useAuth();
    const [packs, setPacks] = useState([] as Pack[]);

    useEffect(() => {
        const initStorePacks = async () => {
            const storePacks = await getStorePacks(auth.jwt, 1);
            const activePacks = filterActivePacks(storePacks);
            const sortedPacks = sortPacksByInventoryCount(activePacks);
            setPacks(sortedPacks);
        }
        initStorePacks();
    }, [auth]);

    return(
        <div>
            <div className='m-2 border-2 border-gray-500 rounded-md'>
                <div className='pl-2 h-10 bg-gray-500 font-bold'>
                    <CurrencyDollarIcon className='h-full inline'/>
                    <h1 className='ml-2 inline-block align-middle'>STORE PACKS</h1>
                </div>
                <StorePackDisplay packs={packs}/>
            </div>
        </div>
    )
}