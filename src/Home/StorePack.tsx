import { Pack } from "../interfaces/Pack"

function getPackImage(pack: Pack): string {
    const primaryImage = pack.images.find(img => img.name === 'image');
    if (primaryImage)
        return primaryImage.url;
    return pack.images[0].url;
}

export default function StorePack({ pack }: { pack: Pack }) {
    return(
        <div className='w-36 border-2 border-green-700 rounded-md flex flex-col'>
            <div className='flex-grow text-center p-2 bg-green-700'>
                <p>{pack.name}</p>
            </div>
            <div className='flex p-2'>
                <p>Stock: {pack.inventoryCount}</p>
            </div>
            <div className='flex-shrink p-2'>
                <img 
                    className=''
                    src={`https://cdn.epics.gg${getPackImage(pack)}`} 
                    alt='No pack preview found :('
                />
            </div>
        </div>
    )
}