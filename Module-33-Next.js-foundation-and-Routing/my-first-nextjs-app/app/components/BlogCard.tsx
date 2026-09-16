import React from 'react';

 interface BlogType {

    id: string,
    title: string,
    description: string,
  
}

const BlogCard = ({blog}:{blog:BlogType}) => {
    const {title,description} =blog;
    return (
        //   <div className="grid grid-cols-3 gap-5">  //Grid will not work here, It needs to control from the parent page i.e BlogsPage
            <div className="card bg-base-100 w-96 shadow-sm mt-5 ">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default BlogCard;