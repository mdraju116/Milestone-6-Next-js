import React from 'react';

interface ChildProps{
    children:React.ReactNode
}

const PostLayout = ({children}:ChildProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostLayout;