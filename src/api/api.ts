import axios from "axios";
import axiosRateLimit from "axios-rate-limit";
import { UserCredentials } from "../interfaces/UserCredentials";
import { Pack } from "../interfaces/Pack";
import { Spinner } from "../interfaces/Spinner";
import { User } from "../interfaces/User";

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
