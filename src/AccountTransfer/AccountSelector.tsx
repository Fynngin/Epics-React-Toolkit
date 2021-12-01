import './AccountSelector.css';
import { useEffect, useState } from "react";
import { searchUsers } from "../api/api";
import { useAuth } from "../App";
import { UserSearchResult } from "../interfaces/UserSearchResult";

export default function AccountSelector() {
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
        setShowSearchResultsMenu(false);
    }

    useEffect(() => {
        if (userSearchResults.length > 0) {
            setShowSearchResultsMenu(true);
        } else {
            setShowSearchResultsMenu(false);
        }
    }, [userSearchResults])

    return(
        <div className='container'>
                {selectedUser.id ? 
                    <img
                        className='avatar'
                        src={`https://cdn.epics.gg${selectedUser.avatar}`}
                        alt='User Avatar'
                    />
                : <></>}
                <form onSubmit={handleUserSearch}>
                    <input
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
                                <li className='dropdownItem' onClick={() => handleUserSelection(user)}>
                                    {user.username}
                                </li>
                            ))}
                        </ul>
                    : <></>}
                </form>
                <p>{selectedUser.username}</p>
        </div>
    )
}