import React from 'react';
import { UserProvider } from './UserProvider';


import Breadcrumb from './Breadcrumb';
import UserProfile from './UserProfile';
import Edit from './Edit';
import Userstype from './Userstype'; 
import Floating from './Floating';

const Container = () => {

    return (
        <>
            <div className="user-container">
                <Breadcrumb />
                <div className="container">
                    <Userstype />
                    <div className="rows-container">
                        <UserProfile />
                        <Edit />
                    </div>
                </div>
            </div>
            <Floating />
        </>
    );
};

const UserEditContainer = () => {
    return (
        <UserProvider>
            <Container />
        </UserProvider>
    );
};

export default UserEditContainer;
