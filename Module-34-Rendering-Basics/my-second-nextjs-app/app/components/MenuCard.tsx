
import Image from 'next/image';
import Link from 'next/link';

type MenuCardProps = {
    food: {
        id: string,
        dish_name: string,
        image_link: string,
        origin_and_popularity:string,
        alternative_names:string
    }

}

const MenuCard = ({ food }: MenuCardProps) => {
    const { dish_name, image_link,alternative_names} = food;

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

                <p>{alternative_names}</p>

                <div className="card-actions justify-end">
                    <Link href={`/menu/${food.id}`}><button className="badge badge-outline">See Details</button></Link>
                    <button className="badge badge-outline">Order Now</button>
                    
                </div>
            </div>

        </div>
    );
};

export default MenuCard;