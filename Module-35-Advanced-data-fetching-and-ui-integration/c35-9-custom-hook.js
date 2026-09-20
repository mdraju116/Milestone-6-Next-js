/* 

✅✅✅Custom Hook in React
A Custom Hook is a JavaScript/TypeScript function that lets you reuse stateful logic between components.

⭐ Memory:
Custom Hook = Reusable React Logic



✅✅ Step 1 — Normal problem
Suppose two components need the same counter logic:

const [count, setCount] = useState(0);

const increase = () => {
  setCount(count + 1);
};

➡️ You would have to repeat this code in both components.


✅✅ Step 2 — Create a Custom Hook
Create:
hooks/
└── useCounter.ts


import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return {
    count,
    increase,
  };
};

export default useCounter;

➡️ Notice the name starts with use:

useCounter
useUser
useProducts
useAuth


✅✅ Step 3 — Use the Custom Hook

"use client";
import useCounter from "../hooks/useCounter";
const Counter = () => {
  const { count, increase } = useCounter();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default Counter;




✅✅ Step 4 — Why is it useful?
You can use the same hook in multiple components:

             useCounter()
              ↙      ↘
             ↓        ↓
        Counter  CounterTwo

Both components get the same logic, but each component has its own state.





*/