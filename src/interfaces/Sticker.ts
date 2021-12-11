import { HistoryEntry } from "./HistoryEntry";
import { StickerTemplate } from "./StickerTemplate";

export interface Sticker {
    id: number
    userId: number
    uuid: string
    status: string
    ethStatus: string
    mintBatch: string
    mintNumber: number
    rating: number
    history: HistoryEntry[]
    isNewStickerTemplate: boolean
    isGhost: boolean
    isMarketList: boolean
    isTradeList: boolean
    stickerTemplateId: number
    stickerTemplate: StickerTemplate
}