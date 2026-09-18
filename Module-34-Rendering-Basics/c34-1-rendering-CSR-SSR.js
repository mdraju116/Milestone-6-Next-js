/* 
✅✅✅What is rendering in Next.js?
Rendering is the process of generating the UI (HTML) so the user can see it in the browser.

For example, you write:
<h1>Hello Raju</h1>

Rendering turns this into something the browser can display:
Hello Raju


➡️Next.js-এ "render" (রেন্ডার) শব্দের অর্থ হলো কোনো কোড বা ডেটাকে প্রসেস করে 
ব্যবহারকারীর ব্রাউজারে দৃশ্যমান পৃষ্ঠা (page) বা দৃশ্য তৈরি করা বা প্রদর্শন করা।

➡️সহজ কথায় 
রেন্ডারিং (Rendering)কোডিং বা ওয়েব ডেভেলপমেন্টের ভাষায়, React বা Next.js-এর কম্পোনেন্টগুলোকে
এইচটিএমএল (HTML) কোডে রূপান্তর করে স্ক্রিনে ফুটিয়ে তোলার প্রক্রিয়াকেই রেন্ডার বলা হয়।

➡️Next.js-এ রেন্ডারিংয়ের ধরনNext.js বিভিন্ন উপায়ে পেজ রেন্ডার করতে পারে:
Server-side Rendering (SSR): ব্যবহারকারী পেজ (রিকোয়েস্ট) করার পর সার্ভারে পেজটি রেন্ডার হয়ে ব্রাউজারে আসে।
Client-side Rendering (CSR): ব্রাউজারে কোড পৌঁছানোর পর জাভাস্ক্রিপ্টের মাধ্যমে পেজ রেন্ডার হয়।
Static Site Generation (SSG): বিল্ড করার সময় (Build time) পেজ আগে থেকেই রেন্ডার বা তৈরি করে রাখা হয়।





✅✅✅Types of Rendering :
The important thing is that Next.js can render a page in different places and at different times.
There are mainly 3 types of rendering :
    -Client-Side Rendering (CSR)
    -Server-Side Rendering (SSR)
    -Static Site Generation (SSG)

There are 2 more rendering types, but they are advanced.
    -Incremental Static Regeneration (ISR)
    -Partial Prerendering (PPR)


➡️➡️Main Difference of the primary 3 types :

|                        | CSR                   | SSR                   | SSG                    |
| ---------------------- | --------------------- | --------------------- | ---------------------- |
| Full name              | Client-Side Rendering | Server-Side Rendering | Static Site Generation |
| Rendering happens      | Browser               | Server                | Build time             |
| When?                  | After JS runs         | Request time          | Before request         |
| Server generates HTML? | Not primarily         | Yes                   | Yes                    |
| Good for               | Interactive UI        | Dynamic data          | Static content         |
| Example                | Counter               | User dashboard        | About page             |



⚠️⚠️Important point for rendering in Next.js
With the App Router, Next.js uses Server Components by default.

For example:
const Page = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  return <h1>{data.name}</h1>;
};
export default Page;

This component can run on the server and generate the UI there.


➡️If you need browser features such as:
    useState()
    useEffect()
    usePathname()
    onClick

📌you need to use:  "use client";
so that the component becomes a Client Component.







✅✅1. CSR — Client-Side Rendering
In CSR, the browser receives JavaScript and renders the UI in the browser.
Client = Browser


➡️Flow
               User
                ↓
             Browser
                ↓
            JavaScript
                ↓
            Render UI
                ↓
            User sees page

➡️Example

"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

➡️Here the browser needs to handle:
click → state change → UI update
So this is client-side behavior.


➡️When useful?
    Interactive UI
    Buttons
    Forms
    useState
    useEffect
    Browser APIs




✅✅2. SSR — Server-Side Rendering
In SSR, the server generates the HTML when the user requests the page.
Server = Your Next.js server


➡️Flow
User requests /products
          ↓
        Server
          ↓
Fetch data
          ↓
Generate HTML
          ↓
      Browser
          ↓
      User sees page

➡️Example
const Products = async () => {
  const response = await fetch(
    "https://api.example.com/products"
  );

  const products = await response.json();

  return (
    <div>
      {products.map((product: any) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </div>
  );
};

export default Products;

➡️The server can fetch the data and generate the page before sending it to the browser.


➡️When useful?
For pages where data should be generated based on the request, such as:
    Frequently changing data
    User-specific data
    Dashboard data
    Real-time-ish information




✅✅3. SSG — Static Site Generation
With SSG, the page is generated before users request it, typically during the build.
Static = generated ahead of time

➡️Flow
Build time
    ↓
Next.js generates HTML
    ↓
Static HTML is ready
    ↓
User visits page
    ↓
HTML is served


➡️Example
Imagine an About page:

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We build modern web applications.</p>
    </div>
  );
}

➡️This content doesn't need to change for every visitor, so it can be pre-rendered.

➡️When useful?
    About page
    Documentation
    Blog content that doesn't change frequently
    Landing pages
    Portfolio




➡️➡️➡️A Real Example
Imagine you have a shopping website.

🏠 Home page
Products don't change every second
→ SSG can be suitable.

👤 User dashboard
Each user has different information
→ SSR can be suitable.

🛒 Add to Cart button
User clicks → cart changes
→ CSR/client-side interaction is needed.

So a single Next.js application can use different rendering approaches for different parts/pages.



✅✅4. ISR — Incremental Static Regeneration
ISR is basically:
Generate a static page, then periodically regenerate it when the data becomes stale.
It combines some benefits of SSG + dynamic data.

➡️Example
Suppose you have a blog page.
You don't want to generate the page for every request, but you also don't want the page to remain unchanged forever.

const Blogs = async () => {
  const response = await fetch("https://api.example.com/blogs", {
    next: {
      revalidate: 60,
    },
  });

  const blogs = await response.json();

  return (
    <div>
      {blogs.map((blog: any) => (
        <h2 key={blog.id}>{blog.title}</h2>
      ))}
    </div>
  );
};
export default Blogs;


➡️Here:revalidate: 60
means the cached data can be considered stale after 60 seconds.


➡️Flow
First request
     ↓
Static page/data served
     ↓
60 seconds pass
     ↓
Data becomes stale
     ↓
Next request can trigger regeneration
     ↓
Updated version becomes available


➡️Why use ISR?
Good for content such as:
    Blogs
    News/article pages
    Product listings
    Documentation
where data changes occasionally, but you don't need to regenerate the page on every request.


✅✅5. PPR — Partial Prerendering
PPR means:
Part of a page is rendered ahead of time, while another part is rendered dynamically when requested.

Instead of choosing:
Entire page → Static
or:
Entire page → Dynamic

you can conceptually have:

              PAGE
               │
       ┌───────┴────────┐
       ↓                ↓
   Static part      Dynamic part
   (prerendered)    (request time)


➡️Example
Imagine a dashboard:

┌─────────────────────────────┐
│ Navbar       ← Static       │
├─────────────────────────────┤
│ Welcome Raju ← Static       │
│                             │
│ User data    ← Dynamic      │
│ Notifications ← Dynamic     │
└─────────────────────────────┘

The static parts can be prepared ahead of time, while personalized/dynamic sections can be generated when the request arrives.


➡️➡️ISR vs PPR

|                 | ISR                             | PPR                                            |
| --------------- | ------------------------------- | ---------------------------------------------- |
| Full name       | Incremental Static Regeneration | Partial Prerendering                           |
| Main idea       | Regenerate cached content       | Mix static + dynamic UI                        |
| Focus           | **Updating static content**     | **Splitting a page into static/dynamic parts** |
| Static content  | Yes                             | Yes                                            |
| Dynamic content | Can be regenerated              | Can be rendered dynamically                    |
| Useful for      | Blogs, products, articles       | Dashboards, personalized pages                 |




🧠 Easy memory

ISR:
Static → becomes stale → regenerate

PPR:
One page → Static part + Dynamic part



*/