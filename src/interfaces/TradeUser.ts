import { Card } from "./Card";
import { Pack } from "./Pack";
import { Sticker } from "./Sticker";

export interface TradeUser {
    id: number
    username: string
    avatar: string
    group: number
    groups: number[]
    tradeBalance: number
    cards: Card[]
    packs: Pack[]
    stickers: Sticker[]
    count: number
}