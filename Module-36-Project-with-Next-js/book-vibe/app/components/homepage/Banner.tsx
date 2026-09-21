
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg"


const Banner = () => {
    return (
        <div className=" container mx-auto px-24 m-5  ">

            <div className="hero-content flex-col lg:flex-row-reverse bg-base-300 rounded-xl p-10">
                <Image src={bannerImg} alt="banner"></Image>
                <div className="space-y-10">
                    <h1 className="text-4xl font-bold">Books to freshen up your bookshelf</h1>     
                    <button className="btn bg-[#23be0a] text-white">View The List</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;