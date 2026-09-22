/* 

✅✅✅✅create graph-chart
https://recharts.github.io/en-US/examples/CustomShapeBarChart/


⚠️⚠️Important: You don't need to put the chart code itself inside pagestoread/page.tsx. 
Keep the chart in a component GraphChart.tsx and simply import and render <GraphChart /> from 
the page.


✅✅ Step 1 — Create a new component and paste the Recharts source code
components/GraphChart.tsx

Copy the Custom Shape Bar Chart source code from Recharts and paste it here.


✅✅ Step 2 — Add "use client"
At the very top:
"use client";

✅✅ Step 3 — Remove the original static data
Remove the Recharts example's:

const data = [
  ...
];


✅✅ Step 4 — Import your BooksContext
Add:
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";


✅✅ Step 5 — Get your GraphChart
Inside the GraphChart component:

const { readBooks } = useContext(BooksContext);

✅✅ Step 6 — Replace the original chart data
Replace the original data source: data={data}
by creating your own data:

const data = readBooks.map((book) => ({
  name: book.bookName,
  uv: book.totalPages,
}));

Then keep:
data={data}

✅✅ Step 7 — Keep XAxis but change its dataKey
Change:
<XAxis dataKey="name" />

No change is actually needed if you use name for the book name.

✅✅ Step 8 — Change the Bar dataKey
Keep:
<Bar dataKey="uv" ... />

because your custom data uses:
uv: book.totalPages

So:
name → Book Name
uv   → Total Pages


✅✅ Step 9 — Remove unused original data fields
If the copied source contains:
pv
amt

you can remove them because you don't need them.


✅✅ Step 10 — Add the empty-state condition
Wrap the chart with:

{readBooks.length > 0 ? (
  // chart
) : (
  <p>No read books to display.</p>
)}

⚠️⚠️and add : flex justify-center 
<div className="container mx-auto my-5 flex justify-center">

✅✅ Step 11 — Import the component into your page
app/pagestoread/page.tsx
import GraphChart from "@/components/GraphChart";

✅✅ Step 12 — Render the component
Inside your page:

const PagesToRead = () => {
  return (
    <div>
      <GraphChart />
    </div>
  );
};

export default PagesToRead;



⭐ That's all you need to change.
The custom shape logic, colors, getPath(), TriangleBar, LabelList, Tooltip, CartesianGrid, etc.
can stay from the Recharts source code.






########################### ✅✅ Full code ✅✅################################
=>component/GraphChart.tsx

"use client";

import BookType from "@/app/types/bookstype";
import { BooksContext } from "@/app/context/BooksContext";
import { useContext } from "react";


import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Label,
    Tooltip,
} from "recharts";

import type { BarShapeProps, LabelProps } from "recharts";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
];

const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2
        },${y + height / 3}
  ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3
        },${y + height} ${x + width},${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[(index ?? 0) % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            stroke={color}
            fill={color}
            style={{
                transition: "stroke-width 0.3s ease-out",
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
};


//my work start from here

const GraphChart = () => {
    const { readBooks } = useContext(BooksContext);

    const data = readBooks.map((book: BookType, index: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1,
        };
    });



    return (
        <div className="container mx-auto my-5 flex justify-center">
            {readBooks.length > 0 ? (
                <BarChart
                    style={{
                        width: "100%",
                        maxWidth: "700px",
                        maxHeight: "70vh",
                        aspectRatio: 1.618,
                    }}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid />
                    <Tooltip cursor={{ fillOpacity: 0.5 }} />
                    <XAxis dataKey="name" />
                    <YAxis width="auto" />

                    <Bar dataKey="uv" shape={TriangleBar} activeBar>
                        <LabelList
                            content={CustomColorLabel}
                            position="top"
                        />
                    </Bar>
                </BarChart>
            ) : (
                <p className="font-bold text-4xl text-center">
                    No read books to display.
                </p>
            )}
        </div>
    );
};

export default GraphChart;



➡️➡️➡️So the overall flow is:

Recharts website
      ↓
Copy source code
      ↓
components/GraphChart.tsx
      ↓
Replace static data with readBooks
      ↓
app/pagestoread/page.tsx
      ↓
Import + <GraphChart />
      ↓
Chart appears on the page




*/