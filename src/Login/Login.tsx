import { useState } from "react"
import { login } from "../api/api";
import { UserCredentials } from "../interfaces/UserCredentials";


async function sendLoginRequest(credentials: UserCredentials) {
    const response = await login(credentials);
    console.log(response);
}

export default function Login() {
    const [creds, setCreds] = useState({email: '', password: ''})

    function handleLogin(event: React.FormEvent) {
        event.preventDefault();
        sendLoginRequest(creds);
    }

    return(
        <div className='flex flex-col items-center justify-center py-12 px-12 font-mono'>
            <div className='max-h-sm max-w-md bg-gray-500 py-6 px-6 rounded-md shadow-sm border-green-500 border-2'>
                <form className='bg-gray-500 space-y-4' onSubmit={handleLogin}>
                    <div>
                        <label htmlFor='email'>E-Mail:</label>
                        <input 
                            id='email' 
                            className='rounded w-full focus:ring-2 focus:outline-none focus:ring-green-500 focus:z-10 text-black px-1'
                            type='email' 
                            name='email' 
                            autoComplete='email' 
                            onChange={e => setCreds({...creds, email: e.target.value})}
                            value={creds.email}
                            required/>
                    </div>
                    <div>
                        <label>
                            <label htmlFor='password'>Password:</label>
                            <input 
                                id='password' 
                                className='rounded w-full focus:ring-2 focus:outline-none focus:ring-green-500 focus:z-10 text-black px-1'
                                type='password' 
                                name='password' 
                                autoComplete='current-password' 
                                onChange={e => setCreds({...creds, password: e.target.value})}
                                value={creds.password}
                                required
                            />
                        </label>
                    </div>
                    <div className='mt-6'>
                        <button type='submit' className='bg-green-500 px-2 rounded'>
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}