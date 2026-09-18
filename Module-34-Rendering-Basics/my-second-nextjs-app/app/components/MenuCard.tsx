import React from 'react';
import Image from 'next/image';

type MenuCardProps = {
    food: {
        id: number,
        dish_name: string,
        image_link: string,
        origin_and_popularity:string
    }

}

const MenuCard = ({ food }: MenuCardProps) => {
    const { dish_name, image_link,origin_and_popularity } = food;

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image width={200} height={200} src={image_link} alt='food Image'></Image>
            </figure>

            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p>{origin_and_popularity}</p>

                <div className="card-actions justify-end">
                    <button className="badge badge-outline">See Details</button>
                    <button className="badge badge-outline">Order Now</button>
                    
                </div>
            </div>

        </div>
    );
};

export default MenuCard;