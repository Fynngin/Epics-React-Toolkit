export interface UserSearchResult {
    id: number
    username: string
    avatar: string
    circuit: {
        stage: string,
        badge: string
    }
    group: number
    groups: number[]
}