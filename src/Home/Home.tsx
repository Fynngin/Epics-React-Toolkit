import { useEffect, useState } from "react"
import { getSpinner, getStorePacks } from "../api/api";
import { useAuth } from "../App"
import { CurrencyDollarIcon, GiftIcon } from '@heroicons/react/solid';
import StorePackDisplay from "./StorePackDisplay";
import SpinnerOddsChart from "./SpinnerOddsChart";
import { Spinner } from "../interfaces/Spinner";
import { SpinnerItem } from "../interfaces/SpinnerItem";
import { Pack } from "../interfaces/Pack";
import SpinnerOddsTable from "./SpinnerOddsTable";

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
    return packs.sort((a: Pack, b: Pack) => b.inventoryCount - a.inventoryCount)
}

function sortSpinnerOddsByChance(spinner: Spinner) {
    return spinner.items.sort((a: SpinnerItem, b: SpinnerItem) => b.chance - a.chance);
}

export default function Home() {
    const auth = useAuth();
    const [packs, setPacks] = useState([] as Pack[]);
    const [spinner, setSpinner] = useState({} as Spinner);

    useEffect(() => {
        const initStorePacks = async () => {
            const storePacks = await getStorePacks(auth.jwt, 1);
            const activePacks = filterActivePacks(storePacks);
            const sortedPacks = sortPacksByInventoryCount(activePacks);
            setPacks(sortedPacks);
        }

        const initSpinnerOdds = async () => {
            let spinnerOdds = await getSpinner(auth.jwt, 1);
            spinnerOdds.items = sortSpinnerOddsByChance(spinnerOdds);
            setSpinner(spinnerOdds);
        }

        initStorePacks();
        initSpinnerOdds();
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

            {spinner.items ? <div className='m-2 border-2 border-gray-500 rounded-md'>
                <div className='pl-2 h-10 bg-gray-500 font-bold'>
                    <GiftIcon className='h-full inline'/>
                    <h1 className='ml-2 inline-block align-middle'>SPINNER ODDS</h1>
                </div>
                <div className='h-60'>
                    <SpinnerOddsChart spinner={spinner}/>
                </div>
                <div>
                    <SpinnerOddsTable spinner={spinner}/>
                </div>
            </div>: <div/>}
        </div>
    )
}