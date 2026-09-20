/* 
✅✅✅Context API in React / Next.js
Context API is a React feature that lets you share data between components without passing props manually 
through every level.



➡️➡️ Simple comparison

| Without Context        | With Context             |
| ---------------------- | ------------------------ |
| Pass props manually    | Shared data              |
| Parent → Child → Child | Any child can access     |
| Prop drilling          | Avoids prop drilling     |
| More repetitive        | Cleaner for shared state |

➡️➡️For example:
App
 ↓
Navbar
 ↓
UserMenu
 ↓
Profile

➡️Without Context, you may need to pass user through every component.


➡️With Context:

             Context
            ↙   ↓   ↘
        Navbar  Cart  Profile

Any component can directly access the shared data.




✅✅ Step 1 — Create UserContext.tsx
Create:
app
└──components
└──products
└──context/
      └── UserContext.tsx


=>UserContext.tsx

"use client";
import { createContext } from "react";

type UserContextType = {
  name: string;
};

export const UserContext = createContext<UserContextType>({
  name: "",
});

const UserProvider = ({children,}: {children: React.ReactNode;}) => {

  const user = {
    name: "Raju",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


✅✅ Step 2 — Add Provider in layout.tsx
=>app/layout.tsx

import UserProvider from "./context/UserContext";

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
       
        <UserProvider>
            <Navbar></Navbar>
            <main className="flex-1">
                {children}
            </main>
        </UserProvider>

      </body>
    </html>
  );
}

➡️ Now Navbar is inside the Provider.

UserProvider
     ↓
   Navbar
     ↓
  Context



✅✅ Step 3 — Use UserContext where you need

⭐ Memory
📌Server Component → can't directly use useContext()  => need and extra client component in components/anyfile.tsx
📌Client Component → can use useContext() directly


As I want to use it in Products page.tsx which is async i.e server-component I need to create an extra page.

✅ Step 3a — Create a small Client Component
=>components/UserName.tsx

"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserName = () => {
  const user = useContext(UserContext);  

  return <p>Hello, {user.name}</p>;  //📌 here the useContex is used directly 
};

export default UserName;



✅ Step 3b — Use it inside Products page
=>products/page.tsx

import UserName from "../components/UserName";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();

  return (
    <div>
      <h1>Products page</h1>

      <UserName />   //📌here the the useContext is used Indirectly

       <div className='grid grid-cols-3 gap-4'>
            {
                products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
            }
      </div>

    </div>
  );
};

export default ProductsPage;




➡️ Now:

ProductsPage
(Server Component)
      ↓
   fetch()
      ↓
   products
      ↓
   UserName
(Client Component)
      ↓
 useContext()
      ↓
 UserContext



⭐ Memory:

createContext()
      ↓
  Provider
      ↓
 useContext()

Context API = Share data with components without passing props.



*/