import { useEffect, useState } from "react"
import { getStorePacks } from "../api/api";
import { useAuth } from "../App"
import { Pack } from "../interfaces/Pack";

export default function Home() {
    const auth = useAuth();
    const [packs, setPacks] = useState([] as Pack[]);

    useEffect(() => {
        const initStorePacks = async (jwt: string) => {
            const storePacks = await getStorePacks(jwt, 1);
            setPacks(storePacks);
        }
        initStorePacks(auth.jwt);
    }, [auth]);

    return(
        <div>
            <p>{packs.length}</p>
        </div>
    )
}