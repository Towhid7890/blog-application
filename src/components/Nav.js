import Image from "next/image";
import Link from "next/link";
import logo from '../assets/logo.png'; 
const Nav = () => {
   return (
      <nav className="flex items-center justify-between bg-primary text-info px-10 py-2 border-b-info border-b-[1px]" >
         <div>
            <Image src={logo} width={70} height={70} alt="our-blog-logo"></Image>
         </div>
         <div className="flex items-center gap-4 font-xl font-bold">
            <Link href="/">Home</Link>
            <Link href="/blogs">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
         </div>
      </nav>
   );
};

export default Nav;
