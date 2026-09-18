import React from 'react';
import Post from '../components/PostCard';
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