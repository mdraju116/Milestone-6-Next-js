/* 
✅✅✅Let's create a JSON Server using db.json step by step. 
This is useful for practicing CRUD and API calls before using a real backend.


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
  "server": "json-server --watch db.json"
}

Depending on your installed JSON Server version, --watch may be unnecessary, 
but it is fine for the common setup.


✅✅Step 5 — Start the server
Run:
npm run server

You should get an API server, commonly at:
http://localhost:3000



✅✅Step 6 — Test your API
Open browser:
http://localhost:3000/products

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
http://localhost:3000/users/1

Response:

{
  "id": 1,
  "name": "Raju",
  "email": "raju@example.com"
}


✅✅Step 9 — Fetch it from React/Next.js

For example:
const Users = async () => {
  const response = await fetch("http://localhost:3000/products");
  const users = await response.json();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;



*/