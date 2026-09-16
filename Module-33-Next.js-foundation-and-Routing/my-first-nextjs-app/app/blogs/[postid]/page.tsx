import React from 'react';



const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and how to build modern user interfaces.",
  },
  {
    id: 2,
    title: "Understanding Next.js",
    description: "A beginner-friendly introduction to Next.js and its powerful features.",
  },
  {
    id: 3,
    title: "JavaScript Array Methods",
    description: "Learn useful JavaScript array methods like map, filter, and reduce.",
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    description: "Understand how TypeScript makes JavaScript development safer and easier.",
  },
  {
    id: 5,
    title: "Building Your First Full-Stack App",
    description: "Explore the basic concepts behind building a full-stack web application.",
  },
];




const PostDetails = async ({ params }: { params: Promise<{ postid: string }> }) => {
    const {postid} =await params;
    const blog=blogsData.find((blog)=>blog.id === parseInt(postid));

    return (
        <div>
            <h1>Blog Id: {postid}</h1>
            <h1>Title: {blog?.title}</h1>
            <p>{blog?.description}</p>
            

        </div>
    );
};

export default PostDetails;