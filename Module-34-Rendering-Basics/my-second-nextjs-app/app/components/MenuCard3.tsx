
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