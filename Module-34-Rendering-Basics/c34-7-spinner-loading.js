/* 

📌If you're using DaisyUI, this creates the spinner.
<span className="loading loading-spinner loading-lg"></span>


📌You don't need to manually import loading.tsx.
Next.js automatically connects:


✅✅Step 1 — Create loading.tsx

Suppose your structure is:

app/
├── menu/
│   ├── page.tsx
│   └── loading.tsx

Next.js automatically uses loading.tsx while menu/page.tsx is loading.



✅✅Step 2 — Create a simple spinner

In app/menu/loading.tsx:

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-3">
      <span className="loading loading-spinner loading-lg"></span>
      <p>Loading foods...</p>
    </div>
  );
};

export default Loading;





*/