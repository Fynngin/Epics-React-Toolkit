import { Card } from "./Card";
import { Sticker } from "./Sticker";

export interface Showcase {
    cards: Card[]
    stickers: Sticker[]
    id: number
    main: boolean
    order: number
    visible: boolean
}