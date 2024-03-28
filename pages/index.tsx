import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Timer from "@/components/Timer";
import Wow_logo from "@/public/wow_logo.png";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <NavBar />
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-white font-medium text-[30px] lg:text-[30px]">
            Google Developers Student Clubs, Kerala
          </h1>
          <p className="text-white font-normal text-[25px]">presents</p>
          <h1 className="text-white font-bold  text-[100px] lg:text-[150px]">
            WoW
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between">
          <Timer />
          <Image
            alt="helo"
            height={500}
            width={500}
            src={
              "https://io.google/2024/app/images/io24-join-community-cta-dark.svg"
            }
          />
        </div>
        <Footer/>
      </div>
    </div>
  );
}
