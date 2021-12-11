import { ApiImage } from "./ApiImage";
import { StickerProperties } from "./StickerProperties";

export interface StickerTemplate {
    id: number
    uuid: string
    title: string
    categoryId: number
    properties: StickerProperties
    inCirculation: number
    rarity: string
    suggestedPrice?: number
    images: ApiImage[]
    limitedEdition: boolean
}