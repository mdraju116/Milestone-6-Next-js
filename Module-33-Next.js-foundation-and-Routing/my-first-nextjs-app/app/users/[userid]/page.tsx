import React from 'react';

const UserDetails = async ({params}:{params:Promise <{userid:string}>}) => {
    const {userid} = await params;
    const response =await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
    const user =await response.json();

    return (
        <div>
            <h1>User ID: {user.id}</h1>
            <h2>Name: {user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDetails;