/* 
Compare the two approaches

| Approach          | Where fetch happens                           | Main tool                  |
| ----------------- | --------------------------------------------- | -------------------------- |
| `use()` + Promise | Server starts fetch → Client consumes Promise | `use()` + `Suspense`       |
| `useEffect()`     | Browser after component renders               | `useEffect()` + `useState` |


http://localhost:3000/menu3


✅1=>menu3/page.tsx


import { Suspense } from 'react';
import MenuCard3 from '../components/MenuCard3';



const MenuPage3 = () => {
    return (
        <div>
            
            <Suspense fallback={ <div> Loading foods.....</div>} >

                    <MenuCard3 />

            </Suspense>

        </div>
    );
};

export default MenuPage3;





✅=>components/MenuCard3.tsx


"use client"

import React, { useState,useEffect } from 'react';


const MenuCard3 = () => {
   
    const [foods,setfoods] =useState([])

    useEffect(()=>{

        fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
        .then(res=>res.json())
        .then(foods=>setfoods(foods.data))

    },[])

    return (
        <div>
            <h2>No of foods : {foods.length}</h2>
        </div>
    );
};

export default MenuCard3;



*/