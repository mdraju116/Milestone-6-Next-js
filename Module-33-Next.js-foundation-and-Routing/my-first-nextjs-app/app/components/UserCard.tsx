import React from 'react';
import { UserType } from '../types/user';
import Link from 'next/link';

const UserCard = ({user}:{user:UserType}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm mt-5 ">
            <div className="card-body">
              
            
                <h2 className="card-title">{user.name}</h2>
                <p>UserName:{user.username}</p>
                <p>Email:{user.email}</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${user.id}`}>
                        <button className="btn btn-primary">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;

