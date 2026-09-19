/* 

✅✅✅1.Caching with ISR in Next.js
ISR (Incremental Static Regeneration) means:
Next.js caches a generated page and re-generates it after a specified time.

➡️➡️ Example:
const response = await fetch("https://api.example.com/products", {
            next: {revalidate: 60,},
        });


➡️Here:
60 seconds
     ↓
Cached page/data
     ↓
After revalidation period
     ↓
Next.js regenerates it
     ↓
New data gets cached



➡️➡️Simple comparison

| Method           | Behavior                              |
| ---------------- | ------------------------------------- |
| `force-cache`    | Keep using cached data                |
| `no-store`       | Fetch fresh data every request        |
| `revalidate: 60` | Cache + periodically refresh          |
| **ISR**          | Static page + periodically regenerate |


⭐ Memory:
ISR = Static page + Cache + Re-generate after a time ⏱️



✅✅✅2.Caching with SSG in Next.js
SSG (Static Site Generation) means Next.js generates the page ahead of time, usually during 
the build process, and serves the generated HTML to users.

✅✅ Step 1 — Build time

const response = await fetch("https://api.example.com/products", {
  cache: "force-cache",
});

➡️ Next.js fetches the data and caches it.

Build
  ↓
Fetch data
  ↓
Generate HTML
  ↓
Cache
  ↓
Serve to users

✅✅ Step 2 — User visits

➡️ The user gets the already-generated/cached page.
There is no need to generate the page from scratch for every request.

✅✅ Step 3 — Data changes

➡️ With pure SSG, the generated page generally remains the same until you rebuild/redeploy the application.

Old data
   ↓
Build again
   ↓
New HTML generated
   ↓
New data available


*/