/* 

✅✅Streaming vs Suspense vs Loading
Simple comparison

| Feature           | What it does                      | Scope                      |
| ----------------- | --------------------------------- | -------------------------- |
| **Streaming**     | Sends UI gradually                | Overall delivery           |
| **Suspense**      | Shows fallback while a part waits | Specific component/section |
| **`loading.tsx`** | Shows loading UI automatically    | Route/segment              |



✅✅1 — Streaming
Streaming means sending the page to the browser in parts as they become ready, 
instead of waiting for the entire page.

➡️ Streaming = how the UI is delivered.
The server sends ready parts first, instead of waiting for the entire page.

Header ─────────→ Browser
Products ───────→ Browser
Slow section ───→ Browser

⭐ Memory: Streaming = Send UI in parts



✅✅2 — Suspense
Suspense lets you show a fallback UI while a particular part of the page is waiting for data/component.

➡️ Suspense = controls a specific loading area.

<Suspense fallback={<p>Loading products...</p>}>
  <ProductList />
</Suspense>


While ProductList is waiting:
ProductList
    ↓
Loading products...
    ↓
ProductList appears

⭐ Memory: Suspense = Fallback for a part



✅✅3 — loading.tsx

➡️ loading.tsx = Next.js's route-level loading UI.

Example:
app/
└── products/
    ├── page.tsx
    └── loading.tsx

When /products is loading, Next.js can automatically show:

const Loading = () => {
  return <p>Loading products...</p>;
};
export default Loading;

⭐ Memory: loading.tsx = Loading UI for a route










*/