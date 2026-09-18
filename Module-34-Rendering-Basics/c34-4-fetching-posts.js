/* 

http://localhost:3000/posts


✅✅1=>posts/page.tsx

import React from 'react';
import Post from '../components/Post';
import { PostType } from '../types/Poststype';

const PostPage = async() => {

    const response= await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();


    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>No of Posts : {posts.length}</h2>

            <div className=' grid grid-cols-3 gap-3'>
                {
                    posts.map((post: PostType) => <Post key={post.id} post={post} />)
                }
            </div>
           
        </div>
    );
};

export default PostPage;



✅✅2=>components/PostCard.tsx

import React from 'react';
import { PostType } from '../types/Poststype';

type PostProps ={
    post:PostType
}

const Post = ({post}:PostProps) => {
    return (
        <div className='border border-e-gray-300 rounded p-4 '>


            <h1>ID : {post.id}</h1>
            <h3>Title : {post.title}</h3>
            <p>{post.body}</p>
            
        </div>
    );
};

export default Post;







*/