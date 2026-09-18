import React from 'react';
import { PostType } from '../types/Poststype';

type PostProps ={
    post:PostType
}

const Post = ({post}:PostProps) => {
    return (
        <div className='border border-e-gray-300 rounded p-4 '>

            {/* <h2>component</h2> */}

            <h1>ID : {post.id}</h1>
            <h3>Title : {post.title}</h3>
            <p>{post.body}</p>
            
        </div>
    );
};

export default Post;