import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Timer from "@/components/Timer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-white font-bold text-[18px] lg:text-[30px]">
            Google Developers Student Clubs, Kerala
          </h1>
          <p className="text-white font-normal">presents</p>
          <h1 className="text-white font-bold  text-[50px] lg:text-[150px]">
            WoW
          </h1>
        </div>
        <Image alt="helo" height={500} width={500} src={'https://io.google/2024/app/images/io24-join-community-cta-dark.svg'}/>
        <Timer/>
      </div>
    </div>
  );
}
