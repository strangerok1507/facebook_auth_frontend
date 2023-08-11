import React from 'react';
import {Typography} from '@mui/material';

const UserData = ({users}) => {
    console.log(users)
    if (!!users) {
        return users.map(user => {
            <div>
                <Typography variant="body1">Username, {user.username}!</Typography>
                <Typography variant="body1">id, {user.id}!</Typography>
                <Typography variant="body1">Email: {user.email}</Typography>
            </div>
        })
    } else {
        return <h2>User list is empty</h2>
    }
}
const HomePage = ({user, users}) => {
    return (
        <>
            {user ?
                <div>
                    <Typography variant="h2">Welcome, {user.name}!</Typography>
                    <Typography variant="body1">Email: {user.email}</Typography>
                </div>:
                ''
            }

            <UserData user={users}/>
        </>
    );
};

export default HomePage;
