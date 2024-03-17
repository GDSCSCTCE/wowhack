import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-white font-bold text-[20px] lg:text-[30px]">Google Developers Student Clubs </h1>
        
      </div>
    </div>
  );
}
