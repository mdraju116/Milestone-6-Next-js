/* 
Follow this documentation: 
https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route

✅✅✅How to display dynamic blog details i.e 
after clicking the READ MORE button how to show every post details


#################### gpt docs ####################

✅✅1. Make "Read More" a Link
Inside BlogCard:

<Link href={`/blogs/${blog.id}`}>
  <button className="btn btn-primary">Read More</button>
</Link>

For example, clicking Blog 2 will navigate to:
/blogs/2


✅✅2. Get the dynamic id    :full code at the bottom
📁 File: app/blogs/[id]/page.tsx

📌you can receive the id through params:
params means the values you get from dynamic parts of the URL.

| URL            | `params`          |
| -------------- | ----------------- |
| `/blogs/1`     | `{ id: "1" }`     |
| `/blogs/2`     | `{ id: "2" }`     |
| `/blogs/hello` | `{ id: "hello" }` |


➡️➡️code:(with typescript)

const PostDetails = async ({ params }: { params: Promise<{ postid: string }> }) => {
    const {postid} =await params;

    return (
        <div>
            <h1>{postid}</h1>

        </div>
    );
};

export default PostDetails;


Now:
/blogs/1 → id = "1"
/blogs/2 → id = "2"
/blogs/3 → id = "3"



✅✅ 3. Find the Matching Blog (full code at the bottom)
📁 File: app/blogs/[id]/page.tsx

After getting the id from the URL, use .find() to search the blogsData array and find the blog whose ID matches
the URL ID.

const blog = blogsData.find((blog) => blog.id === Number(postid));

➡️What happens here?

blogsData → contains all blog posts.
.find() → searches through the array.
blog.id → ID of each blog.
id → ID received from the URL.
When both IDs match, that blog is stored in the blog variable.

➡️For example:
/blogs/2
       ↓
     id = "2"
       ↓
Search blogsData
       ↓
Find blog with ID 2
       ↓
Store it in "blog"


✅✅ 4. Display the Blog Details : full code at the bottom
📁 File: app/blogs/[id]/page.tsx

Once the matching blog is found, display its information:

<h1>{blog?.title}</h1>

<p>{blog?.description}</p>

Here:

blog?.title → displays the blog title.
blog?.description → displays the blog description.
?. → optional chaining; it prevents an error if no matching blog is found.



####################################### Full code  ############################################

✅✅ app/blogs/[id]/page.tsx

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

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ postid: string }>;
}) => {
  const { postid } = await params;

  const blog = blogsData.find((blog) => blog.id === parseInt(postid));

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.description}</p>
    </div>
  );
};

export default BlogDetails;






➡️➡️➡️➡️The whole flow

Blogs Page
    ↓
Click "Read More" on Blog 3
    ↓
/blogs/3
    ↓
[id]/page.tsx
    ↓
id = "3"
    ↓
find blog with id "3"
    ↓
Show Blog 3 details

Key idea:

[id] captures the ID from the URL, and you use that ID to find the corresponding blog data.

*/