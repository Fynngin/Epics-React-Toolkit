import { Card } from "../interfaces/Card"
import './CardImage.css';

type Props = {
    card: Card
}

export default function CardImage({card}: Props) {
    return(
        <img src={card.images.size402} className='cardImage' alt='Showcase Item'/>
    )
}