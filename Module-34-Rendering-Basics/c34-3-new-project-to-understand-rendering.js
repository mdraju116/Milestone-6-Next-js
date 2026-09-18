/* 
Quiz :

1.What's the standard pattern for loading data inside a Client Component?
-Use useEffect to trigger a fetch call, storing the result in state via useState


2.In the Next.js App Router, what is a component by default?
-A Server Component, unless you add "use client"


3.What is CSR (Client-Side Rendering)?
-The browser receives mostly empty HTML and JavaScript, then builds the UI in the browser

4.What is "hydration" in the context of SSR?
-The process where React attaches event listeners/interactivity to server-rendered HTML already 
in the browser

5.Before hydration completes, what state is a server-rendered page in?
-Visible HTML is showing, but buttons/interactions don't work yet

6.What is SSR (Server-Side Rendering)?
-The server generates the HTML for a page on each request and sends it ready-to-display

7.Which is a real downside of pure CSR for a content-heavy page?
-Users may briefly see a blank page while JS downloads and runs before content appears

8.Why can't a Server Component use useState or useEffect?
-Server Components render once on the server with no browser runtime to manage state or side effects 
 afterward — those hooks require client-side interactivity

9.Which is a genuine advantage SSR has over pure CSR?
-Search engines and users get meaningful HTML content immediately, without waiting on JS execution

10.What causes a "hydration mismatch" error?
-The HTML rendered on the server doesn't match what React would render on the client




*/