/* 

Since your food data already comes from an API, we'll build the details page using that same API.

🧠 The whole concept
/menu/3
   ↓
[menuid]
   ↓
menuid = "3"
   ↓
find food
   ↓
show food


✅✅Step 1 — Create the dynamic route
Create a [menuid] folder and a page.tsx 

app/
├── menu/
│   ├── page.tsx
│   └── [menuid]/
│       └── page.tsx
│
└── components/
    └── MenuCard.tsx


The important part is:
[menuid]
This means dynamic route parameter.


✅✅Step 2 — Make "See Details" a Link
=>MenuCard.tsx  : Currently you have:
<button className="badge badge-outline">See Details</button>

We need to navigate to something like:
/menu/1
/menu/2
/menu/3

So import Link:
import Link from "next/link";

Then change your button:
<Link href={`/menu/${food.id}`}>
  <button className="badge badge-outline">
    See Details
  </button>
</Link>


✅✅Step 3 — Get the menuid
Now at => app/menu/[menuid]/page.tsx

const MenuDetails = async ({ params,}: { params: Promise<{ menuid: string }>;}) => {
  const { menuid } = await params;


  return (
    <div>
      <h1>Menu ID: {menuid}</h1>
    </div>
  );
};

export default MenuDetails;



Now visit:
http://localhost:3000/menu/1

You should see:
Menu ID: 1



✅✅Step 4 — Fetch the food data
Now we need to get the actual food.

Your API is:
https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods

=>Inside [menuid]/page.tsx:
const MenuDetails = async ({params,}: {params: Promise<{ menuid: string }>;}) => {

  const { menuid } = await params;

  const response = await fetch( "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods");
  
  ⚠️// const response = await fetch( "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods/${menuid}");
  ⚠️// we can use this ${menuid} also, then we don't need to use find()
  
  const fooddata = await response.json();
  const foods = fooddata.data;

  return (
    <div>
      <h1>Menu ID: {menuid}</h1>
    </div>
  );
};

export default MenuDetails;


Now we have:
menuid → URL ID
foods → all foods from API



✅✅Step 5 — Find the matching food
=>[menuid]/page.tsx
const food = foods.find((food: FoodType) => food.id === menuid);

// menuid is the dynamic value taken from the URL
//and hints we got menuid = food_001 i.e string , so no need to convert in Number(menuid)



✅✅Step 6 — Create the FoodType
=>[menuid]/page.tsx
At the top of your details page:

 type FoodType = {
    id: string,
    dish_name: string,
    image_link: string,
    origin_and_popularity:string,
    alternative_names:string
    
    }


✅✅Step 7 — Display the food
Now we can display:

<h1>{food?.dish_name}</h1>
<p>{food?.origin_and_popularity}</p>


➡️And create a Image also:

<Image
  src={food.image_link}
  alt={food.dish_name}
  width={500}
  height={500}
/>

######################################### Full code ###########################################

✅✅Step 8 — Complete app/menu/[menuid]/page.tsx
Here is the complete version:

import Image from "next/image";
import { notFound } from "next/navigation";


type FoodType = {
  id: string;
  dish_name: string;
  image_link: string;
  origin_and_popularity: string;
};

const MenuDetails = async ({params,}: {params: Promise<{ menuid: string }>;}) => {

  // 1. Get ID from URL
  const { menuid } = await params;

  // 2. Fetch all foods
  const response = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods"
  );

  const fooddata = await response.json();

  // 3. Get foods array
  const foods: FoodType[] = fooddata.data;

  // 4. Find matching food
  const food = foods.find(
    (food) => food.id === menuid
  );
  if (!food) {
  notFound();
}

  return (
    <div className="max-w-4xl mx-auto p-5">

      <div className="card bg-base-100 shadow-xl">

        <figure>
          <Image
            src={food?.image_link || ""}
            alt={food?.dish_name || "Food"}
            width={300}
            height={300}
          />
        </figure>

        <div className="card-body">

          <h1 className="text-3xl font-bold">
            {food?.dish_name}
          </h1>

          <p className="text-lg">
            {food?.origin_and_popularity}
          </p>

        </div>

      </div>

    </div>
  );
};

export default MenuDetails; 









✅✅Step 9 — Understand the complete flow

Suppose you click See Details on food ID 7.

➡️Menu page
Food Card
   ↓
food.id = 7
   ↓
<Link href="/menu/7">

➡️Then browser goes to:
/menu/7

➡️➡️Next.js sees:
app/menu/[menuid]/page.tsx

and gives:
params = {
  menuid: "7"
}


➡️Then:
"7"
 ↓
Number("7")
 ↓
7

➡️Then:
foods.find(food => food.id === 7)
finds the correct food.

➡️Finally:

Food ID 7
Food name
Food image
Food description
        ↓
Display details page


🧠 The whole concept

/menu/3
   ↓
[menuid]
   ↓
menuid = "3"
   ↓
find food
   ↓
show food



*/