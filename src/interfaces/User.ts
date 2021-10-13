export interface User {
    avatar: string
    balance: number
    banned: boolean
    chatPushNotification: boolean
    circuit: {
        badge: string,
        stage: string
    }
    country: string
    created: string
    ethAddress: string
    group: number
    groups: number[]
    id: number
    jwt: string
    onboarding: boolean
    username: string
    verifiedEmail: boolean
    verifiedEthAddress: boolean
    verifiedPhone: boolean
}