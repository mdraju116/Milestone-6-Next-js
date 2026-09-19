import React from 'react';
import ProductCard from '../components/ProductCard';

type ProductType = {
      "id": number,
      "title":string,
      "price": number,
      "description": string,
      "category": string,
      "image": string,
      "rating": number,
      "stock": number
    }

const getProducts =async(): Promise<ProductType[]>=>{
    const response = await fetch('http://localhost:3001/products');
    return response.json();
}

const ProductPage = async() => {

    const products = await getProducts();

    return (
        <div>
                <h2 className='text-center text-xl font-bold mb-10'>No of Products: {products.length}</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
        
        </div>
    );
};

export default ProductPage;