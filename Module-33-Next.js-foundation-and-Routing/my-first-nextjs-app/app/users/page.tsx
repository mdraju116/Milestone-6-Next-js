import React from 'react';
import { UserType } from '../types/user';
import UserCard from '../components/UserCard';

const UsersPage = async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users:UserType[]=await response.json()


    return (
        <div>
            <h1>Users</h1>

           <div className='grid grid-cols-3 gap-5'>
             {
                users.map((user)=> (
                        <UserCard key={user.id} user={user}/>
                ))
            }
           </div>
        </div>
    );
};

export default UsersPage;