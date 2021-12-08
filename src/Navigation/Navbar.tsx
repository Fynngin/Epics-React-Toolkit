import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBoxOpen, faExchangeAlt, faGamepad, faHome, faSearch, faTags, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useHistory } from "react-router";
import './Navbar.css';

interface Route {
    name: string
    icon: IconProp
    isActive: boolean
    path: string
    disabled: boolean
}


export default function Navbar() {
    const history = useHistory();
    const navToggleRef = useRef<HTMLInputElement>(null);

    const isActiveRoute = (routeName: string) => {
        return routeName === history.location.pathname;
    }

    const routes: Route[] = [
        {
            name: 'Home', 
            icon: faHome,
            isActive: isActiveRoute('/'), 
            path: '/',
            disabled: false
        },
        {
            name: 'Mint Search', 
            icon: faSearch, 
            isActive: isActiveRoute('/mintsearch'), 
            path: '/mintsearch',
            disabled: true
        },
        {
            name: 'Mass List', 
            icon: faTags, 
            isActive: isActiveRoute('/masslist'), 
            path: '/masslist',
            disabled: true
        },
        {
            name: 'Rush Games', 
            icon: faGamepad, 
            isActive: isActiveRoute('/rushgames'), 
            path: '/rushgames',
            disabled: true
        },
        {
            name: 'Rush Team Builder', 
            icon: faUsers, 
            isActive: isActiveRoute('/rushteam'), 
            path: '/rushteam',
            disabled: true
        },
        {
            name: 'Account Transfer', 
            icon: faExchangeAlt, 
            isActive: isActiveRoute('/accounttransfer'), 
            path: '/accounttransfer',
            disabled: false
        },
        {
            name: 'Pack Opener', 
            icon: faBoxOpen, 
            isActive: isActiveRoute('/packopener'), 
            path: '/packopener',
            disabled: true
        }
    ]

    const handleNavButtonClick = (route: Route) => {
        const from: any = history.location.state || { from: { pathname: '/' } };
        history.replace(from);
        history.push(route.path);
        if (navToggleRef.current)
            navToggleRef.current.checked = false;
    }

    return(
        <header>
            <input ref={navToggleRef} type='checkbox' id='navToggle' className='navToggle'/>
            <nav>
                <ul>
                    {routes.map((route: Route) => (
                        <li key={route.path} onClick={() => handleNavButtonClick(route)} title={route.name}>
                            <button >
                                {route.icon 
                                    ? 
                                    <div className='routeContainer'>
                                        <FontAwesomeIcon 
                                            className={route.isActive ? 'activeRoute' : ''} 
                                            icon={route.icon} size='lg'
                                        /> 
                                        <h2 className='routeLabel'>{route.name}</h2>
                                    </div>
                                    : route.name
                                }
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <label htmlFor='navToggle' className='navToggleLabel'>
                <span></span>
            </label>
        </header>
    )
}