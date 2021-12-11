export interface HistoryEntry {
    sender?: {
        id: number
        username: string
        avatar: string
    }
    receiver: {
        id: number
        username: string
        avatar: string
    }
    value?: number
    type: string
    created: string
}