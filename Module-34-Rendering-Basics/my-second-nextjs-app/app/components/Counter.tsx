"use client"
import { useState } from "react";

const Counter = () => {

    const [count,setCount]=useState(0);

    const handleSetCount=()=>{
        setCount(count+1);

    }

    console.log("counter renderd"); //client-side


    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={handleSetCount} className='border bg-blue-500 rounded-xl p-4 text-white font-bold'>
                Increase
            </button>
        </div>
    );
};

export default Counter;