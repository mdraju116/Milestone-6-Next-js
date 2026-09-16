import BlogCard from "../components/BlogCard";

//  interface BlogType {

//     id: string,
//     title: string,
//     description: string,

// }

const blogsData = [
  {
    id: "1",
    title: "Getting Started with React",
    description: "Learn the basics of React and how to build modern user interfaces.",
  },
  {
    id: "2",
    title: "Understanding Next.js",
    description: "A beginner-friendly introduction to Next.js and its powerful features.",
  },
  {
    id: "3",
    title: "JavaScript Array Methods",
    description: "Learn useful JavaScript array methods like map, filter, and reduce.",
  },
  {
    id: "4",
    title: "Introduction to TypeScript",
    description: "Understand how TypeScript makes JavaScript development safer and easier.",
  },
  {
    id: "5",
    title: "Building Your First Full-Stack App",
    description: "Explore the basic concepts behind building a full-stack web application.",
  },
];



const BlogsPage = () => {
  return (
    <div>
      <h2 className="text-center font-bold my-5 border  ">Our Blogs</h2>

     {/* showing data in here : Without using another Component */}
     {/*  {blogsData.map((blog) => (
        <div key={blog.id} className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>{blog.description}</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      ))}*/}


      {/* showing data in BlogCard : Using a Component to make it reusable*/}
      <div className="grid grid-cols-3 gap-5">
        {
          blogsData.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        }
      </div>

 

    </div> 

  );
};

export default BlogsPage;