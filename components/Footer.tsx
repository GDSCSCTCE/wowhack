import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function Footer(){
    return(
        <div className="flex flex-col gap-4 justify-start bg-[#202124]">
            <hr className="bg-slate-400"/>
            <div className="m-5">
            <h1 className="text-lg  font-medium">Google Developer Student Clubs</h1>
            <div className="flex flex-col gap-3 text-slate-300  mt-10">
                <p>Terms & Conditions</p>
                <p>Community Guidelines</p>
                <p>Contact Us</p>
            </div>
            <div className="flex flex-row justify-evently gap-3 mt-10">
                <InstagramLogoIcon height={24} width={24}/>
                <LinkedInLogoIcon height={24} width={24}/>
                <TwitterLogoIcon height={24} width={24}/>
            </div>
            </div>
        </div>
    );
}