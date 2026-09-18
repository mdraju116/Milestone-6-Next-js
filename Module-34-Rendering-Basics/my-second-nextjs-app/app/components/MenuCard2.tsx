
"use client"

import React, { use } from 'react';

type FoodType = {
  id: number;
  dish_name: string;
  image_link: string;
  origin_and_popularity: string;
};

type MenuCardProps = {
  foodPromise: Promise<FoodType[]>;
};


const MenuCard2 = ({foodPromise}:MenuCardProps) => {

    const foods=use(foodPromise);

    return (
        <div>
            <h2>No of foods : {foods.length}</h2>
        </div>
    );
};

export default MenuCard2;