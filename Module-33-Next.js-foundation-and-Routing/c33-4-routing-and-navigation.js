/* 

✅✅✅1.Next.js Routing
Routing means deciding which page should be displayed for a particular URL.

For example:
/           → Home
/about      → About
/contact    → Contact
/products   → Products

In Next.js App Router, routing is mainly based on your folder and file structure.

➡️➡️1. Basic routing
Suppose your app folder is:

app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── products/
    └── page.tsx

📌Next.js automatically creates:

File	URL
app/page.tsx	=>      /
app/about/page.tsx =>	/about
app/contact/page.tsx =>	/contact
app/products/page.tsx => /products

⚠️You don't need to manually configure these routes.




➡️➡️2. Why is page.tsx important?
A folder doesn't become a route by itself.

For example:
app/
└── about/

⚠️This doesn't create /about.

You need:
app/
└── about/
    └── page.tsx

Now:/about
exists.

📌Remember:
Folder = URL segment
page.tsx = actual route/page



➡️➡️3. Nested routing
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



➡️➡️4. Dynamic routing
Suppose you have products:

/products/1
/products/2
/products/3


You don't want to create:
1/page.tsx
2/page.tsx
3/page.tsx



📌Instead, use [id]:
app/
└── products/
    └── [id]/
        └── page.tsx

Now:

/products/1
/products/2
/products/50


📌all use the same: products/[id]/page.tsx
The [id] is called a dynamic route segment.





✅✅✅2.Next.js Navigation
Navigation means moving from one route/page to another.

For example:
Home → About → Contact

➡️➡️In Next.js, the main ways to navigate are:
    <Link> -for normal navigation.
    useRouter() -when navigation needs JavaScript logic.
    redirect() -when a condition should redirect the user.


✅1. <Link> — most common
For normal navigation between pages, use Link from next/link.

import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

➡️If you click:
<Link href="/about">About</Link>

Next.js takes you to:
/about


⚠️⚠️ Why not use <a>
You can write:
<a href="/about">About</a>

But in Next.js, for internal navigation, prefer:
<Link href="/about">About</Link>

because Next.js can perform client-side navigation instead of treating it like a completely 
new document navigation.

⭐⭐Simple comparison

| `<a>`                       | `<Link>`                     |
| --------------------------- | ---------------------------- |
| Normal HTML link            | Next.js navigation component |
| Browser navigation          | Client-side navigation       |
| Good for external URLs      | Best for internal routes     |
| No Next.js routing features | Works with Next.js routing   |


➡️For example, external website:
<a href="https://github.com">
  GitHub
</a>


➡️Internal page:
<Link href="/about">
  About
</Link>


✅2. useRouter() — navigation from JavaScript
Sometimes you don't want the user to click a link.

For example:
User submits login
       ↓
Login successful
       ↓
Go to dashboard

➡️You can use useRouter()

import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();

  function handleLogin() {
    // login logic

    router.push("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

➡️When handleLogin() runs:
router.push("/dashboard")
             ↓
       /dashboard


⭐⭐Important useRouter() methods

| Method             | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| `router.push()`    | Navigate to another page                         |
| `router.replace()` | Navigate without keeping current page in history |
| `router.back()`    | Go back                                          |
| `router.forward()` | Go forward                                       |
| `router.refresh()` | Refresh server-side data                         |


=>push()
router.push("/about");
Go to About.


=>back()
router.back();
Go back to the previous page.

=>replace()
router.replace("/dashboard");
Useful after login because the user may not need to go back to the login page.



✅3. redirect() — redirect automatically
Next.js also provides redirect().

Example:
import { redirect } from "next/navigation";
export default function Profile() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    redirect("/login");
  }
  return <h1>Profile</h1>;
}


➡️If the user isn't logged in:

/profile
    ↓
not logged in
    ↓
/login


⭐⭐ Navigation methods comparison

| Method             | When to use                                 |
| ------------------ | ------------------------------------------- |
| `<Link>`           | User clicks a navigation link               |
| `router.push()`    | Navigation triggered by JavaScript/event    |
| `router.replace()` | Navigate and replace current history entry  |
| `router.back()`    | Go to previous page                         |
| `redirect()`       | Automatically redirect based on a condition |


➡️Easy memory
📌User clicks link
      ↓
   <Link>

📌JavaScript event
      ↓
 router.push()

📌Condition says "go somewhere else"
      ↓
  redirect()



✅✅ React Router vs Next.js navigation

Since you're learning React first, remember this:

➡️React Router
<Link to="/about">
  About
</Link>


➡️Next.js
<Link href="/about">
  About
</Link>


➡️➡️The main difference is:

React Router → to
Next.js      → href






*/