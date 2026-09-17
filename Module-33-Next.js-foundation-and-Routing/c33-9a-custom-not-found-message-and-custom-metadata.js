/* 
########################## 1.Custom page not found message  ###############################

✅✅1.Custom not found message for global(i.e for all page)
If you want custom 404 / Not Found message  for a an url error, then do this :

➡️ Create not-found.tsx
For a global custom not-found.tsx page:

app/
├── page.tsx
├── not-found.tsx
└── dashboard/
    └── page.tsx

➡️ Add your custom UI
=>not-found.tsx

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;


Now if you visit a URL that doesn't exist, for example:
http://localhost:3000/abc
Next.js will show your custom not-found.tsx.




✅✅2.Custom not found message for a specific route (i.e for a single page)
If you want a custom Not Found message for a specific route, 
create a not-found.tsx inside that route's folder.

For example, suppose you have:

app/
└── dashboard/
    ├── page.tsx
    └── not-found.tsx

➡️dashboard/not-found.tsx
const NotFound = () => {
  return (
    <div>
      <h1>Dashboard Page Not Found</h1>
      <p>This dashboard page does not exist.</p>
    </div>
  );
};
export default NotFound;

This not-found.tsx is associated with the dashboard route segment.



✅✅3.Custom not found message using notFound() method (i.e for a single user)

If you have:
app/
└── users/
    └── [userid]/
        ├── page.tsx
        └── not-found.tsx

Then you can show:User not found
specifically when a particular user doesn't exist.


➡️use notFound() function inside users/[userid]/page.tsx:

import { notFound } from "next/navigation";
const UserDetails = async () => {
  const user = null;

  if (!user) {
    notFound();
  }

  return <h1>User Details</h1>;
};


➡️➡️Simple memory
not-found.tsx = what to show
notFound() = when to show it.






############################## 2.Custom Metadata  ########################################

In Next.js App Router, you can set global metadata in the root app/layout.tsx, and then 
override it for a specific page using that page's page.tsx.

✅✅1. Global title

➡️Put this in:app/layout.tsx
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Website",
  description: "My awesome website",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


➡️Now every page gets:
My Website
as the default title.



✅✅2. Specific page title
Suppose you have:

app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

➡️In app/about/page.tsx:

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us",
};


export default function AboutPage() {
  return <h1>About Us</h1>;
}


➡️Now:
/ → My Website
/about → About Us
The page-level metadata overrides the global metadata for that page.



✅✅3. Global title with template
You can also make the title automatically include your website name.

➡️app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "My Website",
    template: "%s | My Website",
  },
  description: "My awesome website",
};


➡️Then a page with: (about/page.tsx)

export const metadata: Metadata = {
  title: "About Us",
};

will display:
About Us | My Website




➡️➡️➡️Easy memory
app/layout.tsx → Global/default metadata
page.tsx → Specific page metadata
template → Automatically combine page title + website title

*/