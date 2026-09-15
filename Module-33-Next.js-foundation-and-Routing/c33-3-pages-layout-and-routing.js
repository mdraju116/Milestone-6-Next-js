/* 

1. page.tsx — the actual page

A page.tsx file represents a route/page that the user can visit.

Example:

app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

This creates:

/          → app/page.tsx
/about     → app/about/page.tsx
/contact   → app/contact/page.tsx

For example:

// app/about/page.tsx

export default function About() {
  return <h1>About Us</h1>;
}

When you visit:

/about

Next.js renders that page.tsx.

2. layout.tsx — shared structure

layout.tsx is used for UI that should remain shared between multiple pages.

For example:

Navbar
   ↓
Page content
   ↓
Footer

Instead of putting the Navbar and Footer inside every page, you can put them in layout.tsx.

// app/layout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

Here:

{children}

means:

Put the current page here.




Next.js Routing

Routing means deciding which page should be displayed for a particular URL.

For example:

/           → Home
/about      → About
/contact    → Contact
/products   → Products

In Next.js App Router, routing is mainly based on your folder and file structure.

1. Basic routing

Suppose your app folder is:

app/
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── products/
    └── page.tsx

Next.js automatically creates:

File	URL
app/page.tsx	/
app/about/page.tsx	/about
app/contact/page.tsx	/contact
app/products/page.tsx	/products

You don't need to manually configure these routes.

2. Why is page.tsx important?

A folder doesn't become a route by itself.

For example:

app/
└── about/

This doesn't create /about.

You need:

app/
└── about/
    └── page.tsx

Now:

/about

exists.

Remember:

Folder = URL segment
page.tsx = actual route/page

3. Nested routing

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
4. Dynamic routing

Suppose you have products:

/products/1
/products/2
/products/3

You don't want to create:

1/page.tsx
2/page.tsx
3/page.tsx

Instead, use [id]:

app/
└── products/
    └── [id]/
        └── page.tsx

Now:

/products/1
/products/2
/products/50

all use the same:

products/[id]/page.tsx

The [id] is called a dynamic route segment.


*/