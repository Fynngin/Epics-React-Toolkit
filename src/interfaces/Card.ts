import { CardImages } from "./CardImages";
import { HistoryEntry } from "./HistoryEntry";

export interface Card {
    id: number
    status: string
    userId: number
    uuid: string
    images: CardImages
    ethStatus: string
    type: string
    mintNumber: number
    mintBatch: string
    rating: number
    level: number
    levelBonus: number
    signatureImage?: string
    history?: HistoryEntry[]
    isNewCardTemplate: boolean
    isGhost: boolean
    isMarketList: boolean
    isTradeList: boolean
}