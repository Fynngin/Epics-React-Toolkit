import { ApiImage } from "./ApiImage";
import { ApiVideo } from "./ApiVideo";
import { PackProperties } from "./PackProperties";
import { TreatmentChance } from "./TreatmentChance";

export interface Pack {
    acquireType: string[]
    cardCount: number
    categoryId: number
    comingSoon: boolean
    cost: number
    costType: string
    description: string
    entityCount: number
    id: number
    images: ApiImage[]
    inventoryCount: number
    legacy: boolean
    limited: boolean
    marketStart?: string
    name: string
    openType?: string
    packPrimary: string
    packPrimaryId?: number
    packType: string
    properties: PackProperties
    purchaseEnd?: string
    purchaseStart?: string
    releaseTime?: string
    sale: boolean
    saleCost: number
    starter: boolean
    treatmentsChance: TreatmentChance[]
    userLimit: number
    videos: ApiVideo[]
}