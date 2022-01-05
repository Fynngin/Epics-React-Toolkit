import { ForwardedRef, forwardRef } from "react";
import { Card } from "../interfaces/Card"
import './CardImage.css';

type Props = {
    id?: string
    card: Card
    style?: Object
}

export default forwardRef((props: Props, ref: ForwardedRef<HTMLImageElement>) => {
    return (
        <img {...props.style} ref={ref} src={props.card.images.size402} className='cardImage' alt='Showcase Item'/>
    )
})