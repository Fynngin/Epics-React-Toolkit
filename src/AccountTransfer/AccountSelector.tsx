import './AccountSelector.css';
import { useEffect, useRef, useState } from "react";
import { searchUsers } from "../api/api";
import { useAuth } from "../App";
import { UserSearchResult } from "../interfaces/UserSearchResult";
import BaseContainer from '../BaseComponents/BaseContainer';
import BaseButton from '../BaseComponents/BaseButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface AccountSelectorProps {
    onUserSelect: (user: UserSearchResult) => void
}

export default function AccountSelector(props: AccountSelectorProps) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [userSearchResults, setUserSearchResults] = useState([] as UserSearchResult[]);
    const [selectedUser, setSelectedUser] = useState({} as UserSearchResult);
    const [showSearchResultsMenu, setShowSearchResultsMenu] = useState(false);
    const auth = useAuth();

    async function handleUserSearch() {
        const searchResults = await searchUsers(auth.user.jwt, userSearchInput);
        setUserSearchResults(searchResults);
    }

    function handleUserSelection(user: UserSearchResult) {
        setSelectedUser(user);
        props.onUserSelect(user);
        setShowSearchResultsMenu(false);
    }

    useEffect(() => {
        if (userSearchResults.length > 0) {
            setShowSearchResultsMenu(true);
        } else {
            setShowSearchResultsMenu(false);
        }
    }, [userSearchResults])

    const inputField: any = useRef(null);
    useEffect(() => window.addEventListener('click', evt => {
        if (inputField.current && inputField.current.contains(evt.target))
            setShowSearchResultsMenu(true);
        else
            setShowSearchResultsMenu(false);
    }))

    return(
        <BaseContainer title='Select Account' description='This is where your items will be sent.'>
            <div className='accSelectorContainer'>
                <form onSubmit={handleUserSearch} className='searchForm'>
                    <input
                        autoComplete='off'
                        ref={inputField}
                        id='userSearchInput'
                        className='searchInput'
                        placeholder='Search users...'
                        onChange={evt => {
                            setUserSearchInput(evt.target.value);
                        }}
                        onFocus={() => setShowSearchResultsMenu(true)}
                    />
                    {showSearchResultsMenu ? 
                        <ul className='dropdown'>
                            {userSearchResults.map((user: UserSearchResult) => (
                                <li key={user.id} className='dropdownItem' onClick={() => handleUserSelection(user)}>
                                    {user.username}
                                </li>
                            ))}
                        </ul>
                    : <></>}
                    <BaseButton type='submit' onClick={handleUserSearch} className='userSearchBtn'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </BaseButton>
                </form>
                {selectedUser.id ? 
                    <div className='selectedUser'>
                        <img
                            className='avatar'
                            src={`https://cdn.epics.gg${selectedUser.avatar}`}
                            alt='User Avatar'
                        />
                        <p>{selectedUser.username}</p>
                    </div>
                : <p className='infoText'>No user selected.</p>}
            </div>
        </BaseContainer>
    )
}