import React from 'react';

interface ChildProps{
    children:React.ReactNode
}

const PostLayout = ({children}:ChildProps) => {
    return (
        <div>
            <h2>This is blogs layout</h2>
            {children}
        </div>
    );
};

export default PostLayout;