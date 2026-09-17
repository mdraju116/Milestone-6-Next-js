import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about us",
};

const About = () => {
    return (
        <div>
            <p>Hello Next Developer</p>
        </div>
    );
};

export default About;