import { SpinnerItem } from "./SpinnerItem";

export interface Spinner {
    cost: number
    costType: string
    id: number
    items: SpinnerItem[]
    name: string
}