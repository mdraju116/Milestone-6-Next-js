/* 

✅✅Difference: Normal Fetch(menu) vs Promise Fetch(menu2) vs useEffect Fetch(menu3)

| Feature               | Normal `fetch()`             | Promise + `use()`                  | `useEffect()` fetch                               |
| --------------------- | ---------------------------- | ---------------------------------- | ------------------------------------------------- |
| Where commonly used   | Server Component             | Server + Client Component          | Client Component                                  |
| Main idea             | `await fetch()` and get data | Pass Promise → `use()` resolves it | Fetch after component renders                     |
| Needs `"use client"`? | ❌ No                         | Client component using `use()` → ✅ | ✅ Yes                                             |
| Uses `async/await`    | ✅ Yes                        | Promise is passed directly         | Usually `.then()` or async function inside effect |
| Uses `Suspense`       | ❌ Not necessarily            | ✅ Commonly                         | ❌ Not for the fetch itself                        |
| Uses `useState`       | ❌ Usually no                 | ❌ Not required                     | ✅ Usually                                         |
| Uses `useEffect`      | ❌ No                         | ❌ No                               | ✅ Yes                                             |
| Initial rendering     | Server can wait for data     | Suspends while Promise resolves    | Initially renders without fetched data            |
| Best for              | Server-side data fetching    | Streaming/Suspense pattern         | Browser/client-side data fetching                 |








http://localhost:3000/menu



✅1=>menu/page.tsx

import React from 'react';
import FoodCard from '../components/MenuCard';

 type FoodType = {
        id: number,
        dish_name: string,
        image_link: string,
        origin_and_popularity:string
    }


const MenuPage = async() => {

const response= await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
const fooddata = await response.json();
const foods = fooddata.data;

    return (
        <div>
            <h2 className='text-xl text-center font-bold m-5'>No of Foods : {foods.length}</h2>
            <div  className='grid grid-cols-3 gap-4'>
                {
                    foods.map((food:FoodType)=> <FoodCard key={food.id} food={food}  />)
                }
            </div>
        </div>
    );
};

export default MenuPage;



✅=>components/MenuCard.tsx
import React from 'react';
import Image from 'next/image';

type FoodCardProps = {
    food: {
        id: number,
        dish_name: string,
        image_link: string,
        origin_and_popularity:string
    }

}

const FoodCard = ({ food }: FoodCardProps) => {
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

export default FoodCard;






*/