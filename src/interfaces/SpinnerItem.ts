import { ApiImage } from "./ApiImage";
import { SpinnerItemProperties } from "./SpinnerItemProperties";

export interface SpinnerItem {
    chance: number
    id: number
    images: ApiImage[]
    isJackpot: boolean
    name: string
    properties: SpinnerItemProperties
}