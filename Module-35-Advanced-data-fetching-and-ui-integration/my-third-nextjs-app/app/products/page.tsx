import React from 'react';

const getProducts =async()=>{
    const response = await fetch('http://localhost:3000/products');
    return response.json();
}

const ProductPage = async() => {

    
    
const products = await getProducts();

    return (
        <div>
            {
                <h2>No of Products: {products.length}</h2>
                
            }
        </div>
    );
};

export default ProductPage;