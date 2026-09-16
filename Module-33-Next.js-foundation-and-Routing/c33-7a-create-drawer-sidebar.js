/* 

✅✅✅For your Next.js project, I would not put the sidebar directly inside the Home page.tsx unless 
the sidebar is only needed on the Home page.

✅✅1a.A better structure is to create a reusable component:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
└── components/
    └── Sidebar.tsx

Then put the DaisyUI sidebar code in:
components/Sidebar.tsx
And use it where you need it.



✅✅1b.If the sidebar is for a dashboard

A common structure would be:

app/
├── page.tsx
└── dashboard/
    ├── layout.tsx
    ├── page.tsx
    ├── users/
    │   └── page.tsx
    └── settings/
        └── page.tsx

Then dashboard/layout.tsx can contain:

┌──────────────┬─────────────────────┐
│              │                     │
│   Sidebar    │   Dashboard Page    │
│              │                     │
│   Home       │                     │
│   Users      │                     │
│   Settings   │                     │
│              │                     │
└──────────────┴─────────────────────┘

This is actually one of the best uses of a Next.js layout because the sidebar remains while you navigate 
between dashboard pages.

➡️dashboardLayout.tsx:

    import React from "react";

    const DashboardLayout = ({children,}: {children: React.ReactNode;}) => {
    return (

        //put the daisy drawer code

    );
    };
    export default DashboardLayout;

⚠️NB: Don't forget to use {children} inside the sidebar

✅✅2.Basic DaisyUI Sidebar

<div className="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

  // Main content 
  <div className="drawer-content">
     //Mobile content
    <label htmlFor="my-drawer" className="btn drawer-button lg:hidden">
      ☰
    </label>

    <h1 className="text-2xl font-bold p-5">
      Main Content
      {children}
    </h1>
  </div>

  // Sidebar 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>

    <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
      <li><a>Home</a></li>
      <li><a>Products</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>


➡️➡️How it works
Think of it as:

drawer
├── drawer-content    → Main page
└── drawer-side       → Sidebar

The important DaisyUI classes are:

| Class            | Purpose                     |
| ---------------- | --------------------------- |
| `drawer`         | Creates the drawer layout   |
| `drawer-content` | Main content area           |
| `drawer-side`    | Sidebar                     |
| `drawer-toggle`  | Controls open/close         |
| `drawer-button`  | Button that opens sidebar   |
| `drawer-overlay` | Dark overlay behind sidebar |
| `menu`           | DaisyUI menu styling        |


➡️One important part
<div className="drawer lg:drawer-open">

This means:

Mobile: sidebar is hidden and can be opened with ☰
Large screen (lg): sidebar stays open

So for a typical dashboard:

Desktop
┌──────────────┬─────────────────────┐
│   Sidebar    │                     │
│              │    Main Content     │
│   Home       │                     │
│   Products   │                     │
│   Settings   │                     │
└──────────────┴─────────────────────┘

Mobile
┌─────────────────────┐
│ ☰    Main Content   │
└─────────────────────┘

Memory:

drawer-side = sidebar
drawer-content = main content


















*/