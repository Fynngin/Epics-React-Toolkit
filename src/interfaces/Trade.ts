import { TradeUser } from "./TradeUser";

export interface Trade {
    id: number
    status: string
    offeredBy: number
    message?: string
    transfer: boolean
    created: string
    updated: string
    user1: TradeUser
    user2: TradeUser
}