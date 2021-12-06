import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../api/api";
import { useAuth } from '../App';
import { User } from "../interfaces/User";
import BaseButton from "../BaseComponents/BaseButton";
import BaseContainer from "../BaseComponents/BaseContainer";
import './Login.css';

export default function Login() {
    const [creds, setCreds] = useState({email: '', password: ''});
    const [hideLoginInfo, toggleLoginInfo] = useState(true);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const auth = useAuth();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();
        setLoading(true);
        const user: User = await login(creds);
        if (user.jwt) {
            const from: any = location.state || { from: { pathname: '/' } };
            auth.signin(user);
            history.replace(from);
            history.push('/');
        }
    }

    return(
        <div className='flex flex-col items-center justify-center py-12 px-12 max-w-xl m-auto'>
            <h1 className='mb-2 text-xl text-center'>
                Welcome to Epics Toolkit v2
            </h1>
            <BaseContainer className={loading ? 'loading' : ''} title='Login' description='Log in with your Epics Account.'>
                <form className='space-y-4 mb-4' onSubmit={handleLogin}>
                    <div>
                        <input
                            id='email'
                            type='email'
                            autoComplete='email'
                            placeholder='E-Mail'
                            className='loginInput'
                            onChange={e => setCreds({...creds, email: e.target.value})}
                            value={creds.email}
                            required
                        />
                    </div>
                    <div>
                        <input 
                            id='password' 
                            type='password' 
                            autoComplete='current-password' 
                            placeholder='Password'
                            className='loginInput'
                            onChange={e => setCreds({...creds, password: e.target.value})}
                            value={creds.password}
                            required
                        />
                    </div>
                    <div className='mt-6'>
                        <BaseButton type='submit'>
                            Log In
                        </BaseButton>
                    </div>
                </form>
                <div className='text-center'>
                    <span className='infoTextLink' onClick={() => toggleLoginInfo(!hideLoginInfo)}>
                        Why is this needed?
                    </span>
                    <p hidden={hideLoginInfo}>
                        Your login is needed to send requests to the Epics API.
                        Your login credentials will never be saved!
                        All my code can be found on my&nbsp;
                        <a target="_blank" rel="noopener noreferrer"  href="https://github.com/Fynngin/Epics-React-Toolkit">GitHub</a>
                        , if you want to verify yourself.
                    </p>
                </div>
            </BaseContainer>
        </div>
    )
}