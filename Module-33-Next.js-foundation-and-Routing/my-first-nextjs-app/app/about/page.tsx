import type { Metadata } from "next";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us",
};

const About = () => {
    return (
        <div className={roboto.className}>
            <p>Hello Next Developer</p>
        </div>
    );
};

export default About;