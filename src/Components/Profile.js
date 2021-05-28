import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react'
import { UserContext } from './Main';

const Profile = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            hi {user.displayName}
            <div>
            <img src={user.photoURL} />
            </div>
        </div>
    )
}
export default Profile;