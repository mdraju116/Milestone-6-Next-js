
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


//Fetching static data with gsp
export async function generateStaticParams() {
    const response = await fetch("http://localhost:3001/products");
    const products: ProductType[] = await response.json();

    // return products.map((product)=>( {productid:product.id.toString()} ))
    return products.slice(0, 5).map((product) => ({ productid: product.id.toString() }))


}



const ProductDetailsPage = async ({ params }: { params: Promise<{ productid: string }> }) => {

    // Fetching dynamic route($productid) with params
    const { productid } = await params;

    const response = await fetch(`http://localhost:3001/products/${productid}`);
    const product: ProductType = await response.json();

    return (
        <div className="max-w-md mx-auto text-left border border-blue-300 p-10">
            <h1 className="text-xl font-bold">Product Details</h1>

            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetailsPage;