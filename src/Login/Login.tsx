import { Button, TextField, Link } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react"
import {  useHistory, useLocation } from "react-router-dom";
import { login } from "../api/api";
import { useAuth } from '../App';

export default function Login() {
    const [creds, setCreds] = useState({email: '', password: ''});
    const [hideLoginInfo, toggleLoginInfo] = useState(true);
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();
        const response: any = await login(creds);
        if (response.status === 200) {
            const from: any = location.state || { from: { pathname: '/' } };
            auth.signin(response.data.data.jwt);
            history.replace(from);
            history.push('/');
        }
    }

    return(
        <div className='flex flex-col items-center justify-center py-12 px-12 max-w-xl m-auto'>
            <h1 className='mb-2 text-xl text-center'>
                Welcome to Epics Toolkit v2
            </h1>
            <Box sx={{border: 2, borderRadius: 2, borderColor: 'primary.main', p: 4, width: '100%'}}>
                <form className='space-y-4 mb-4' onSubmit={handleLogin}>
                    <div>
                        <TextField 
                            id='email' 
                            label='E-Mail'
                            type='email'
                            autoComplete='email'
                            fullWidth
                            onChange={e => setCreds({...creds, email: e.target.value})}
                            value={creds.email}
                            required
                        />
                    </div>
                    <div>
                        <TextField 
                            id='password' 
                            label='Password'
                            type='password' 
                            autoComplete='current-password' 
                            fullWidth
                            onChange={e => setCreds({...creds, password: e.target.value})}
                            value={creds.password}
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <Button type='submit' variant='contained' size='small'>
                            Log In
                        </Button>
                    </div>
                </form>
                <div className='text-center'>
                    <Link onClick={() => toggleLoginInfo(!hideLoginInfo)}>Why is this needed?</Link>
                    <p hidden={hideLoginInfo}>
                        Your login is needed to send requests to the Epics API.
                        Your login credentials will never be saved!
                        All my code can be found on my&nbsp;
                        <Link target="_blank" rel="noopener noreferrer"  href="https://github.com/Fynngin/Epics-React-Toolkit">GitHub</Link>
                        , if you want to verify yourself.
                    </p>
                </div>
            </Box>
        </div>
    )
}