import React from 'react';
import { Suspense } from 'react';
import MenuCard2 from '../components/MenuCard2';

 type FoodType = {
        id: number,
        dish_name: string,
        image_link: string,
        origin_and_popularity:string
    }


const foodPromise =async():Promise<FoodType[]>=>{
    const response= await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const fooddata = await response.json();
    const foods = fooddata.data;

    return foods;

}

const MenuPage2 = () => {
    return (
        <div>
            
            <Suspense fallback={ <div> Loading foods.....</div>} >

                    <MenuCard2 foodPromise= {foodPromise()}/>

            </Suspense>

        </div>
    );
};

export default MenuPage2;