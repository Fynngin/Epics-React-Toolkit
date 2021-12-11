import { ApiImage } from "./ApiImage";

export interface Game {
    id: number
    name: string
    dateStart: string
    dateEnd: string
    image: string
    images: ApiImage[]
}