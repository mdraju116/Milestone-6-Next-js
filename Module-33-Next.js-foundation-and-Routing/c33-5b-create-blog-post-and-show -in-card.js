/* 
Here is the complete beginner note from creating post data → parent → child component → card layout, 
using Next.js + TypeScript.

✅✅1. Create the Blog/Post Data
📁 app/blogs/page.tsx

First, create an array containing your posts.

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and build modern user interfaces.",
  },
  {
    id: 2,
    title: "Understanding Next.js",
    description: "Learn the basics of Next.js and its powerful features.",
  },
  {
    id: 3,
    title: "JavaScript Array Methods",
    description: "Learn useful JavaScript methods like map, filter, and reduce.",
  },
];

Each post should have a unique id.

✅✅2. Send every blog data to a Reusable child component : BlogCard
📁 app/blogs/page.tsx

<div>
  {blogsData.map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
    />
  ))}
</div>


✅✅3. Create the Reusable Child Component and receive the data
📁 components/BlogCard.tsx

This component will represent one post card.

➡️First, define the type:

interface BlogType {
  id: number;
  title: string;
  description: string;
}

➡️Then receive the post through props:

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="border rounded-lg p-5 shadow">
      <h2 className="text-xl font-bold">{blog.title}</h2>

      <p className="mt-2">
        {blog.description}
      </p>

      <button className="btn btn-primary mt-4">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;


➡️➡️Important idea

The child receives:blog
from the parent.
So:

Parent
   ↓
passes blog
   ↓
Child
   ↓
displays blog.title
blog.description



✅✅4. Make the Cards a Grid  :The parent controls the layout.
📁 app/blogs/page.tsx

<div className="grid grid-cols-3 gap-5">
  {blogsData.map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
    />
  ))}
</div>

Now:

┌────────────┐ ┌────────────┐ ┌────────────┐
│ React      │ │ Next.js    │ │ JavaScript │
│ ...        │ │ ...        │ │ ...        │
└────────────┘ └────────────┘ └────────────┘




The important point is:
Grid layout belongs to the parent.
The BlogCard only defines what one card looks like.




####################################### Full code  ############################################



✅✅✅✅1. Complete Parent Page

📁 app/blogs/page.tsx

import BlogCard from "@/components/BlogCard";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    description: "Learn the basics of React and build modern user interfaces.",
  },
  {
    id: 2,
    title: "Understanding Next.js",
    description: "Learn the basics of Next.js and its powerful features.",
  },
  {
    id: 3,
    title: "JavaScript Array Methods",
    description: "Learn useful JavaScript methods like map, filter, and reduce.",
  },
];

const BlogsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">
        Our Blogs
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;



✅✅✅2. Complete Child Component

📁 components/BlogCard.tsx

interface BlogType {
  id: number;
  title: string;
  description: string;
}

const BlogCard = ({ blog }: { blog: BlogType }) => {
  return (
    <div className="border rounded-lg p-5 shadow">
      <h2 className="text-xl font-bold">
        {blog.title}
      </h2>

      <p className="mt-2">
        {blog.description}
      </p>

      <button className="btn btn-primary mt-4">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;



✅✅✅3. The Complete Flow

Remember this flow:

blogsData
    ↓
Parent Page
(app/blogs/page.tsx)
    ↓
.map()
    ↓
<BlogCard blog={blog} />
    ↓
Props
    ↓
Child Component
(components/BlogCard.tsx)
    ↓
blog.title
blog.description
    ↓
One Card
In one sentence:

Parent owns the data → .map() creates cards → props pass each post → Child displays the post.



✅✅✅9. Most Important Parts to Remember

| Concept            | Meaning                             |
| ------------------ | ----------------------------------- |
| `blogsData`        | Contains all posts                  |
| `.map()`           | Creates one component for each post |
| `BlogCard`         | Reusable child component            |
| `blog={blog}`      | Passes one post to child            |
| `key={blog.id}`    | Gives React a unique identity       |
| `BlogType`         | TypeScript structure of a post      |
| `blog.title`       | Displays the title                  |
| `blog.description` | Displays the description            |
| `grid-cols-3`      | Makes 3 card columns                |






*/