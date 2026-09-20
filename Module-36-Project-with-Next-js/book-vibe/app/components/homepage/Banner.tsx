
import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg"


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src={bannerImg} alt="banner"></Image>
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn bg-[#23be0a] text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;