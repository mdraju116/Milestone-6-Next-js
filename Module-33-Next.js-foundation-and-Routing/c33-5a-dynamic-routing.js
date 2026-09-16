
/* 

Follow this documentation: 
https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-nested-route



✅✅ Dynamic routing
Suppose you have products:

/products/1
/products/2
/products/3


You don't want to create:
1/page.tsx
2/page.tsx
3/page.tsx



📌Instead, create [id] folder
app/
└── products/
    └── [id]/
        └── page.tsx

and create a normal route in Navbar.tsx: <Link href="/products">Products</Link>

and use url : http://localhost:3000/products/1
or use url : http://localhost:3000/products/2
or use url : http://localhost:3000/products/3.....


Now:

/products/1
/products/2
/products/50



📌all use the same: products/[id]/page.tsx
The [id] is called a dynamic route segment.



✅✅. Nested routing
You can create multiple levels:

app/
└── products/
    └── electronics/
        └── page.tsx

The URL becomes:
/products/electronics


Another example:
app/
└── dashboard/
    ├── page.tsx
    ├── profile/
    │   └── page.tsx
    └── settings/
        └── page.tsx

Routes:
/dashboard
/dashboard/profile
/dashboard/settings



*/