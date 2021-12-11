import { ApiImage } from "./ApiImage";

export interface Team {
    id: number
    country: string
    dob: string
    name: string
    gameId: number
    active: boolean
    image: string
    images: ApiImage[]
    bio: string
    dateStart: string
    dateEnd: string
    shortName: string
    manager: string
    playerIds: number[]
}