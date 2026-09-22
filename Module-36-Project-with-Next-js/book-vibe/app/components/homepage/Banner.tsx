
import Image from "next/image";
// import hero1 from "@/assets/hero_img.jpg"
import hero2 from "@/assets/hero2.jpg"
import Link from "next/link";



const Banner = () => {
    return (
        <div className=" container mx-auto px-24 m-5  ">

            <div className="hero-content flex-col justify-around lg:flex-row-reverse bg-base-300 rounded-xl  p-10">
                <Image src={hero2} alt="banner"
                        width={250} height={250}
                
                ></Image>

                <div className="space-y-10">
                    <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>     
                    <Link href={"/bookdetails"}><button className="btn bg-[#23be0a] text-white">View The List</button></Link>
                </div>

            </div>

        </div>
    );
};

export default Banner;