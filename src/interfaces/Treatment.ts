import { ApiImage } from "./ApiImage";
import { ApiVideo } from "./ApiVideo";

export interface Treatment {
    id: number
    name: string
    categoryId: number
    designation: string
    tier: string
    active: boolean
    variation: string
    gameSide?: string
    accentColor?: string
    artistName?: string
    season: string
    buyPrice?: number
    images: ApiImage[]
    videos: ApiVideo[]
    suggestedPrice?: number
}