import { Pack } from "../interfaces/Pack";
import StorePack from "./StorePack";


export default function StorePackDisplay({ packs }: {packs: Pack[]}) {
    return(
        <div className='p-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 grid-auto-rows gap-4 justify-items-center'>
            {packs.map(pack => (
                <StorePack key={pack.id} pack={pack}/>
            ))}
        </div>
    )
}