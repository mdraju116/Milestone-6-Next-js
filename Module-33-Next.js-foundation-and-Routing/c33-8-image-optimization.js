/* 

✅✅Next.js Image Optimization
Next.js provides a special Image component that automatically optimizes images.

Instead of normal HTML:
<img src="/image.jpg" alt="Image" />

use:
import Image from "next/image";

Why use next/image?
It helps with:

| Feature               | Purpose                                     |
| --------------------- | ------------------------------------------- |
| Optimization          | Reduces image size                          |
| Responsive images     | Serves suitable sizes for different screens |
| Lazy loading          | Loads images when needed                    |
| Modern formats        | Can serve optimized formats                 |
| Prevents layout shift | `width` and `height` reserve space          |


✅✅1. Local Image — Step by Step

➡️Step 1: Put image in public
my-next-app/
├── public/
│   └── images/
│       └── logo.png
├── src/
│   └── app/
│       └── page.tsx
└── next.config.ts

➡️Step 2: Import Image
import Image from "next/image";

➡️Step 3: Use the image
<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={80}
/>


➡️➡️suppose You put an image in public folder directly and want to use it in Dashboard/page.tsx :
import Image from 'next/image';
const DashboardPage = () => {
    return (
        <div>
            Welcome to DashBoard.
            <Image src="/goldenglove.jpg" alt='goldenGlove' width={300} height={300}/>
        </div>
    );
};
export default DashboardPage;




⚠️That's it. No next.config.ts configuration is required for local images in public.



✅✅2. Remote Image — Step by Step

Suppose your image URL is:
https://s3.amazonaws.com/my-bucket/photo.jpg

➡️Step 1: Configure next.config.ts
import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
        search: "",
      },
    ],
  },
};

export default config;


➡️➡️What each part means

| Property                       | Meaning                        |
| ------------------------------ | ------------------------------ |
| `protocol: "https"`            | Only HTTPS images              |
| `hostname: "s3.amazonaws.com"` | Image must come from this host |
| `port: ""`                     | No specific port               |
| `pathname: "/my-bucket/**"`    | Only images inside `my-bucket` folder |
| `search: ""`                   | No query string allowed        |


➡️Step 2: Restart the server
After changing next.config.ts:
npm run dev
Restart it if it was already running.


➡️Step 3: Import Image
import Image from "next/image";

➡️Step 4: Use the remote image

<Image
  src="https://s3.amazonaws.com/my-bucket/photo.jpg"
  alt="React"
  width={50}
  height={50}
/>



✅✅✅ 3. Local vs Remote


|                    | Local              | Remote                  |
| ------------------ | ------------------ | ----------------------- |
| Location           | `public/`          | External website        |
| `next.config.ts`   | ❌ Not required     | ✅ Required              |
| `Image` import     | ✅                  | ✅                       |
| `width` / `height` | Usually needed     | Usually needed          |
| Example            | `/images/logo.png` | `https://.../React.svg` |



*/