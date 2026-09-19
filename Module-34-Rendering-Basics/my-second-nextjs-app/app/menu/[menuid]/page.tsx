
import Image from "next/image";
import { notFound } from "next/navigation";


type FoodType = {
    id: string,
    dish_name: string,
    image_link: string,
    origin_and_popularity: string,
    alternative_names: string

}

const MenuDetails = async ({ params, }: { params: Promise<{ menuid: string }>; }) => {

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
    const food = foods.find((food) => food.id === menuid);
    // menuid is the dynamic value taken from the URL

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



