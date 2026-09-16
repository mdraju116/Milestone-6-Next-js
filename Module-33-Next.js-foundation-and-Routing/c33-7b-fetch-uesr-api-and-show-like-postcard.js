/* 
We'll use JSONPlaceholder:
https://jsonplaceholder.typicode.com/users
//full code is at the bottom.

✅✅Step 1 — Create the page

Create:

app/
└── users/
    └── page.tsx

For the first example, we'll fetch directly inside the Server Component.

✅✅Step 2 — Define the user type

Create:

types/
└── user.ts

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

This tells TypeScript what one user looks like.

✅✅Step 3 — Fetch the users
Open:app/users/page.tsx

Start with:
import { User } from "@/types/user";

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
};

export default UsersPage;


➡️What happened?
const response = await fetch(...)
Gets the response from the API.

Then:
const users: User[] = await response.json();
Converts the response into JavaScript data.

Now users is:

[
  { id: 1, name: "...", email: "...", ... },
  { id: 2, name: "...", email: "...", ... },
  ...
]

✅✅Step 4 — Create a reusable UserCard

Create:
components/
└── UserCard.tsx

import { User } from "@/types/user";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="border rounded-lg p-5 shadow">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;


Here:
{ user }
is a prop coming from the parent.



✅✅Step 5 — Map the users
Now go back to:app/users/page.tsx
Import the card,Then use .map() and create grid col :

import UserCard from "@/components/UserCard";

<div className="grid grid-cols-3 gap-5">
  {users.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
</div>


################## Dynamic routing ######################
✅✅6.Create the dynamic page

Suppose your folder is:

app/
└── users/
    └── [userid]/
        └── page.tsx

        
✅✅7.Get the dynamic id : with params
app/users/[userid]/page.tsx

const UserDetails = async ({params,}: {params: Promise<{ userid: string }>;}) => {
  const { userid } = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const user = await response.json();

  return (
    <div>
      <h1>User ID: {user.id}</h1>
      <h2>Name: {user.name}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;











################## Full code ######################

➡️➡️app/users/page.tsx

import UserCard from "@/components/UserCard";
import { User } from "@/types/user";

const UsersPage = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users: User[] = await response.json();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Users
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;



➡️➡️components/UserCard.tsx
import { User } from "@/types/user";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="border rounded-lg p-5 shadow">
      <h2 className="text-xl font-bold">
        {user.name}
      </h2>

      <p>Username: {user.username}</p>

      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;


➡️➡️types/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}







*/