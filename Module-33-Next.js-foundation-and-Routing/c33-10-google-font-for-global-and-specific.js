/* 
In Next.js, you can use Google Fonts globally or for a specific component/page using next/font/google.

✅✅1. Global Google Font
Suppose you want to use Poppins throughout your website.

➡️Just Do this 3 steps :
    1.import font (import { Poppins } from "next/font/google";)
    2.keep in a variable (const poppins = Poppins({subsets: ["latin"],});)
    3.use that variable inside the return (<body className={poppins.className}>)

➡️NB: You can keep in this way too (for using as a template string):
    1.import font 
   2.keep in a variable like this (extra variable )
        const geistSans = Geist({
            variable: "--font-geist-sans",
            subsets: ["latin"],
        });
    3.use that variable inside the template string (className={`${geistSans.variable} `})


    

➡️➡️app/layout.tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      ⭐<body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

➡️Now every page and component uses Poppins by default.
Key idea
<body className={poppins.className}>
applies the font globally.



✅✅2. Specific font for a specific page
Suppose your whole website uses Poppins, but you want Roboto only for your About page.

➡️➡️app/about/page.tsx
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    ⭐<div className={roboto.className}>
      <h1>About Us</h1>
      <p>This page uses Roboto.</p>
    </div>
  );
}

Only this <div> and its children use Roboto.



✅✅3. Specific component
You can do the same in a component such as Navbar.tsx:

➡️➡️Navbar.tsx:
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    ⭐<nav className={roboto.className}>
      <h1>My Website</h1>
    </nav>
  );
};

export default Navbar;


Now only the Navbar uses Roboto.






*/