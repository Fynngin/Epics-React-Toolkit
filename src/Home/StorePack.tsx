import { Avatar, Card, CardHeader, CardMedia, Typography } from "@mui/material";
import { Pack } from "../interfaces/Pack"

function getPackImage(pack: Pack): string {
    const primaryImage = pack.images.find(img => img.name === 'image');
    if (primaryImage)
        return primaryImage.url;
    return pack.images[0].url;
}

export default function StorePack({ pack }: { pack: Pack }) {
    return(
        <Card variant='outlined' sx={{width: '10em', height: '100%'}}>
            <CardHeader 
                sx={{ height: '4em' }}
                avatar={
                    <Avatar variant='square' src={`packTypeIcons/${pack.acquireType[0]}.svg`}/>
                }
                title={
                    <Typography variant="body1" sx={{opacity: 1, fontSize: 12 }}>
                        {pack.name}
                    </Typography>
                }
            />
            <CardMedia
                sx={{ p: 2 }}
                component='img'
                height='140'
                image={`https://cdn.epics.gg${getPackImage(pack)}`}
                alt='No pack preview found'
            />
            <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
                Stock: {pack.inventoryCount}
            </Typography>
        </Card>
    )
}