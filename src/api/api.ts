import axios from "axios";
import axiosRateLimit from "axios-rate-limit";
import { UserCredentials } from "../interfaces/UserCredentials";
const http = axiosRateLimit(axios.create(), {maxRequests: 130, perMilliseconds: 60000})

export function login(credentials: UserCredentials) {
    return http('https://api.epics.gg/api/v1/auth/login', {
        method: 'POST',
        data: credentials
    })
}