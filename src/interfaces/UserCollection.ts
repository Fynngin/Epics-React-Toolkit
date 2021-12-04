import { Collection } from "./Collection";

export interface UserCollection {
    collection: Collection
    count: number
    rank?: number
    score: number
    total: number
}