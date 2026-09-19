/* 
✅✅✅Let's create a JSON Server using db.json step by step. 
This is useful for practicing CRUD and API calls before using a real backend.

################################### 1.Create the server #####################################
🧠 The whole process

Create db.json
      ↓
Install json-server
      ↓
npm run server
      ↓
localhost:3000
      ↓
/products
      ↓
React / Next.js
      ↓
fetch()


✅✅Step 1 — Install JSON Server
npm install json-server


✅✅Step 2 — Create db.json
Create this file in the root of your project:

My Projet/
├── app
├── package.json
└── db.json

✅✅Step 3 - Create some json-data and Put inside db.json:
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 800
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 20
    }
  ]
}

Here:
products  → collection
id        → unique identifier


✅✅Step 4 — Add a script
Open package.json.

Find:
"scripts": {
  "test": "..."
}

Add:
"scripts": {
  "server": "json-server --watch db.json --port 3001"
}

Depending on your installed JSON Server version, --watch may be unnecessary, 
but it is fine for the common setup.


✅✅Step 5 — Start the server
Run:
npm run server

You should get an API server, commonly at:
http://localhost:3001



✅✅Step 6 — Test your API
Open browser:
http://localhost:3001/products

You should get:

 [
    {
      "id": 1,
      "name": "Laptop",
      "price": 800
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 20
    }
  ]




✅✅Step 7 — Get one specific user
Use the id:
http://localhost:3001/users/1

Response:

{
  "id": 1,
  "name": "Raju",
  "email": "raju@example.com"
}


✅✅Step 9 — Fetch it from React/Next.js
=>products/page.tsx:

import React from 'react';
const getProducts =async()=>{
    const response = await fetch('http://localhost:3001/products');
    return response.json();
}

const ProductPage = async() => {

    const products = await getProducts();

    return (
        <div>
            {
                <h2>No of Products: {products.length}</h2>
                
            }
        </div>
    );
};

export default ProductPage;






################################### 2.Run the server #####################################
⚠️If you're using json-server with a local db.json, the JSON Server must be running whenever 
your Next.js app needs to fetch data from it.

⚠️One important issue in your setup
You are also using Next.js, which normally runs on:
http://localhost:3000

So you should not run JSON Server on the same port.



✅✅ Step 1: Run Next.js
Terminal 1:
npm run dev

Next.js:
http://localhost:3000

✅✅ Step 2: Run JSON Server on another port
Terminal 2:
npm run server

Your script should use port 3001, for example:
"scripts": {
  "dev": "next dev",
  "server": "json-server --watch db.json --port 3001"
}


Then JSON Server will be:
http://localhost:3001



✅✅ Step 3: Change your fetch URL
Change:
fetch('http://localhost:3000/products')

to:
fetch('http://localhost:3001/products')


So your code becomes:
const getProducts = async () => {
  const response = await fetch('http://localhost:3001/products');
  return response.json();
};



✅The overall setup
Terminal 1
npm run dev
       ↓
Next.js
localhost:3000
       ↓
Product Page


Terminal 2
npm run server
       ↓
JSON Server
localhost:3001
       ↓
db.json
       ↓
/products








*/