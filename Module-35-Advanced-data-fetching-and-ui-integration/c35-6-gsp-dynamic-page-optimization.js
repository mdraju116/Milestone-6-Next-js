/* 
✅✅✅gsp=generateStaticParams() in Next.js

generateStaticParams() is used with dynamic routes to tell Next.js which dynamic pages should be 
generated at build time.


✅✅ Step 1 — Create Dynamic route

Your folder:

app/
└── products/
    ├── page.tsx
    └── [productid]/
        └── page.tsx

So Next.js can generate:

/products/1
/products/2
/products/3
...



✅✅ Step 2 — Fetch dynamic route($productid) with params
=>[productid]/page.tsx


const ProductDetails = async ({params,}: {params: Promise<{ productid: string }>;}) => {
  const { productid } = await params;

  const response = await fetch(`http://localhost:3001/products/${productid}`);
  const product: ProductType = await response.json();

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;


✅✅ Step 3 — Fetch static data with gsp
=>[productid]/page.tsx

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3001/products");

  const products: ProductType[] = await response.json();

  return products.map((product) => ({
    productid: product.id.toString(),
  }));
}

➡️ Here, the API returns products like:

[
  { id: 1, name: "HeadPhone" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Watch" }
]

Then .map() converts them into:

[
  { id: "1" },
  { id: "2" },
  { id: "3" }
]



✅✅ Step 4 — Complete example
=>[productid]/page.tsx

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
};

export async function generateStaticParams() {
  const response = await fetch("http://localhost:3001/products");

  const products: ProductType[] = await response.json();

  return products.map((product) => ({
    productid: product.id.toString(),
  }));
}

const ProductDetails = async ({params,}: {params: Promise<{ productid: string }>;}) => {
  const { productid } = await params;

  const response = await fetch(`http://localhost:3001/products/${productid}`);
  const product: ProductType = await response.json();

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;





➡️➡️ How it works

Your db.json:

products
   ↓
fetch()
   ↓
products array
   ↓
.map()
   ↓
{ productid: "1" }
{ productid: "2" }
{ productid: "3" }
   ↓
generateStaticParams()
   ↓
/products/1
/products/2
/products/3



⭐ Memory:
fetch → data → map → params → static pages

generateStaticParams() uses your product data to tell Next.js which /products/[productid] pages 
to generate at build time.


*/