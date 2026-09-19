import React from 'react';

import Image from 'next/image';

type ProductCardProps = {
    product: {
        "id": number,
        "title": string,
        "price": number,
        "description": string,
        "category": string,
        "image": string,
        "rating": number,
        "stock": number
    }
}


const ProductCard = ({ product }: ProductCardProps) => {
    const { id, title, price, description, category, image } = product;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="w-full h-56 flex justify-center items-center">
                <Image
                    src={image}
                    alt="product image"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;