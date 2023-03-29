import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import Lottie from "lottie-react";
import BannerImage from "./../assets/Banner.json";; 

const Banner = () => {
   
   return (
      <header className="flex items-center justify-center gap-10 p-10 py-20 bg-[#060047] text-white">
         <div className="space-y-5 w-1/2">
            <h2 className="text-5xl text-accent uppercase font-bold ">Welcome to Blog BD</h2>
            
            <p className="text-xl font-medium">Blog Bd provides newses about Information of Technologies, Web Development, Software Development, Graphics and AI.</p>
            <Link href="/blogs" className="block">
                <button className="bg-secondary text-xl px-10 py-2 font-bold rounded-lg ">
                     Show Blogs  
                </button>
            </Link>
         </div>
         <div className="flex items-center justify-center w-1/2 ">
            <Lottie className="w-4/5" animationData={BannerImage} />;
         </div>
      </header>
   );
};

export default Banner;
