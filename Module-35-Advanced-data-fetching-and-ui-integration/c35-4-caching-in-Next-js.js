/* 

Caching in Next.js
Caching means Next.js can store the result of some work/data so it doesn't have to do the 
same work again every time.

➡️➡️A simple idea:

➡️Without cache:
Request → Fetch API → Get data → Show page
Request → Fetch API → Get data → Show page
Request → Fetch API → Get data → Show page

➡️With cache:
Request → Fetch API → Store result → Show page
Request → Use cached result → Show page
Request → Use cached result → Show page



✅ Main caching types in Next.js

| Cache type              | What it caches             | Simple meaning                 |
| ----------------------- | -------------------------- | ------------------------------ |
| **Request Memoization** | `fetch()` requests         | Avoid duplicate fetches        |
| **Data Cache**          | Fetched/API data           | Store data for reuse           |
| **Full Route Cache**    | Rendered route output      | Store generated page           |
| **Router Cache**        | Client-side route segments | Store visited pages in browser |


➡️➡️Think of a restaurant 🍽️:

Request Memoization
→ "I already asked for this data during this render."

Data Cache
→ "I already have this API data stored."

Full Route Cache
→ "I already generated this whole page."

Router Cache
→ "I already visited this page in my browser."



####################################### Data Cache  ######################################################

✅✅✅First focus on Data Cache and these three fetch options:

| Option           | Meaning                                 |
| ---------------- | --------------------------------------- |
| `force-cache`    | Use cached data                         |
| `no-store`       | Fetch fresh data every request          |
| `revalidate: 60` | Revalidate cached data after 60 seconds |




✅ Step 1: fetch() and caching
In a Server Component, you can fetch data like this and
By default it is set to : no-cache

const getProducts = async () => {
  const response = await fetch("http://localhost:3001/products");

  return response.json();
};



✅ Step 2: cache: "force-cache"
If you want to explicitly tell fetch() to use caching:

const response = await fetch(
  "http://localhost:3001/products",
  {
    cache: "force-cache",
  }
);

➡️Meaning:
"Prefer the cached response instead of fetching fresh data every time."
This is useful when the data doesn't change frequently.


✅ Step 3: cache: "no-store"
If you need fresh data on every request:

const response = await fetch(
  "http://localhost:3001/products",
  {
    cache: "no-store",
  }
);

➡️Meaning:
"Don't use the cached response. Fetch fresh data."

For example, if your product stock changes frequently:
fetch("http://localhost:3001/products", {
  cache: "no-store",
});



✅ Step 4: Revalidation
You can also say:
"Use the cached data, but refresh it periodically."

For example:
const response = await fetch("https://example.com/api/products",
        {next: {revalidate: 60,},}
      );


➡️60 means approximately:
60 seconds
So the data can be revalidated after that period.





⭐ Easy memory trick
force-cache → CACHE IT 🗄️
no-store → DON'T CACHE 🚫
revalidate → CACHE + REFRESH ⏱️





*/