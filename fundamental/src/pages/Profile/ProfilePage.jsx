import React from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';

export default function Profilelist({users}){
    return (
        <>
            <Header text="Profile Page" />
            {users.map( (user) => <ProfileCard key={user.id} user={user}/>)}
        </>
    );
}
