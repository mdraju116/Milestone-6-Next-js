/* 

✅✅✅1. page.tsx — the actual page
A page.tsx file represents a route/page that the user can visit.

Example:

app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

➡️This creates:

/          → app/page.tsx
/about     → app/about/page.tsx
/contact   → app/contact/page.tsx


➡️For example:
→ app/about/page.tsx

export default function About() {
  return <h1>About Us</h1>;
}

When you visit: /about
Next.js renders that page.tsx => About Us



✅✅✅2. layout.tsx — shared structure
layout.tsx is used for UI that should remain shared between multiple pages.

For example:
Navbar
   ↓
Page content
   ↓
Footer

📌Instead of putting the Navbar and Footer inside every page, you can put them in layout.tsx.


➡️ app/layout.tsx
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

📌Here:{children}
means:Put the current page here.


➡️➡️Layout can also be nested
This is a very important Next.js concept.

You can have:
app/
├── layout.tsx
│
├── page.tsx
│
├── about/
│   └── page.tsx
│
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    │
    ├── profile/
    │   └── page.tsx
    │
    └── settings/
        └── page.tsx

➡️The root layout can contain:

Navbar
   ↓
{children}
   ↓
Footer

➡️And the dashboard layout can contain:

Dashboard Sidebar
   ↓
{children}

➡️So /dashboard/profile could conceptually become:

Root Layout
│
├── Navbar
│
└── Dashboard Layout
    │
    ├── Sidebar
    │
    └── Profile Page

This is called nested layouts.






*/