import { ApiImage } from "./ApiImage";
import { ApiVideo } from "./ApiVideo";

export interface Player {
    id: number
    dob: string
    age: number
    country: string
    name: string
    gameId: number
    teamId: number
    handle: string
    active: boolean
    image: string
    images: ApiImage[]
    videos: ApiVideo[]
    bio: string
    position: string
    dateStart: string
    dateEnd: string
    quote: string
    homeTown: string
    frameType: string
    lastDate: string
    playerRoleId: number
}