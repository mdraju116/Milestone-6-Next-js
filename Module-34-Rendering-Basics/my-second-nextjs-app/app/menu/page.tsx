import React from 'react';
import MenuCard from '../components/MenuCard';

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
                    foods.map((food:FoodType)=> <MenuCard key={food.id} food={food}  />)
                }
            </div>
        </div>
    );
};

export default MenuPage;