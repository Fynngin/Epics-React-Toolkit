import axios from "axios";
import axiosRateLimit from "axios-rate-limit";
import { UserCredentials } from "../interfaces/UserCredentials";
import { Pack } from "../interfaces/Pack";
import { Spinner } from "../interfaces/Spinner";
import { User } from "../interfaces/User";
import { UserSearchResult } from "../interfaces/UserSearchResult";
import { UserCollection } from "../interfaces/UserCollection";

const http = axiosRateLimit(axios.create(), {maxRequests: 130, perMilliseconds: 60000})

export async function login(credentials: UserCredentials): Promise<User> {
    const response: any = await http('https://api.epics.gg/api/v1/auth/login', {
        method: 'POST',
        data: credentials
    })

    if (response.status === 200) 
        return response.data.data as User;
    
    return {} as User;
}

export async function getStorePacks(jwt: string, categoryId: number): Promise<Pack[]> {
    let packs: Pack[] = [];
    let page = 1;
    while (true) {
        const response: any = await http('https://api.epics.gg/api/v1/packs', {
            method: 'GET',
            headers: {
                'x-user-jwt': jwt
            },
            params: {
                'categoryId': categoryId,
                'page': page
            }
        })
        page += 1;

        if (response.status !== 200)
            break;
        
        if (response.data.data.length === 0)
            break;
        
        for (const el of response.data.data) {
            const pack = el as Pack;
            packs.push(pack);
        }
    }
    return packs;
}

export async function getSpinner(jwt: string, categoryId: number): Promise<Spinner> {
    const response: any = await http('https://api.epics.gg/api/v1/spinner', {
        method: 'GET',
        headers: {
            'x-user-jwt': jwt
        },
        params: {
            'categoryId': categoryId
        }
    });

    if (response.status !== 200)
        return {} as Spinner;
    
    return response.data.data as Spinner;
}

export async function searchUsers(jwt: string, username: string): Promise<UserSearchResult[]> {
    const response: any = await http('https://api.epics.gg/api/v1/users/search', {
        method: 'GET',
        headers: {
            'x-user-jwt': jwt
        },
        params: {
            'username': username
        }
    });

    if (response.status !== 200)
        return [];
    
    return response.data.data as UserSearchResult[];
}

export async function getUserCollections(jwt: string, userId: number, categoryId: number): Promise<UserCollection[]> {
    const response: any = await http(`https://api.epics.gg/api/v1/collections/users/${userId}/user-summary`, {
        headers: {
            'x-user-jwt': jwt
        },
        params: {
            'categoryId': categoryId
        }
    });

    if (response.status !== 200)
        return [];
    
    return response.data.data as UserCollection[];
}

export async function getAllItemIds(jwt: string, userId: number, collectionId: number, itemType: 'card'|'sticker', categoryId: number): Promise<number[]> {
    const response: any = await http(`https://api.epics.gg/api/v1/collections/users/${userId}/${itemType}ids`, {
        headers: {
            'x-user-jwt': jwt
        },
        params: {
            'collectionId': collectionId,
            'categoryId': categoryId
        }
    })

    if (response.status !== 200)
        return [];
    
    let ids: number[] = []
    if (itemType === 'card') {
        for (const template of response.data.data) {
            ids = [...ids, ...template.cardIds];
        }
    } else {
        for (const template of response.data.data) {
            ids = [...ids, ...template.stickerIds];
        }
    }

    return ids;
}
