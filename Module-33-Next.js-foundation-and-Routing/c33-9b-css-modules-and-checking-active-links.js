/* 
###################### 1.Global and specific CSS ####################################
✅✅1.Global CSS
You can use global CSS to apply styles across your application.
Create a app/global.css file and import it in the root layout to apply the styles to
every route in your application:

➡️app/global.css
body {
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}


➡️app/layout.tsx
// These styles apply to every route in the application
import './global.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



✅✅2.Specific CSS /CSS Modules
CSS Modules locally scope CSS by generating unique class names. This allows you to use the 
same class in different files without worrying about naming collisions.

To start using CSS Modules, create a new file with the extension .module.css and import it 
into any component inside the app directory:

➡️app/blog/blog.module.css

.blog {
  padding: 24px;
}


➡️app/blog/page.tsx

import styles from './blog.module.css'
export default function Page() {
  return <main className={styles.blog}></main>
}







###################### 1.Checking(highlighting) Active Links ####################################
✅✅To make a link/Nav items highligted while clicking, use usePathname() method.

=>Navbar.tsx

➡️1.Make Navbar.tsx a Client Component
"use client";

Why?
Because usePathname() is a client-side hook.


➡️2.Import usePathname
import { usePathname } from "next/navigation";


➡️3.Get the current path
const pathname = usePathname();

For example:
/  => pathname is /
/about => pathname is /about

➡️4.Compare pathname with the link's href
className={pathname === "/about" ? "active" : ""}

If you're currently at /about, the active class is applied.




➡️➡️➡️Full code : inside  Navbar.tsx:

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "active" : ""}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? "text-blue-600 font-semibold" : ""}
      >
        About
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? "text-blue-600 font-semibold" : ""}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;









*/