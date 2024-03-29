import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Landing from '@/public/assets/images/landing.png';
import LineDraw2 from '@/public/assets/images/LineDraw2.svg';

const Hero = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="flex h-screen w-full flex-col justify-center items-center md:p-5 px-10 pt-28 overflow-hidden relative">
            <Image
                src={LineDraw2}
                className="gradImgR absolute opacity-45 bg-gradient-to-r from-bgColor to-transparent -right-40 z-10 -rotate-45 -top-24  w-[50vw]"
                alt=""
            />
            <Image
                src={LineDraw2}
                className=" gradImgL absolute  opacity-45 -left-40 z-10 -rotate-45 scale-x-[-1]  scale-y-[-1]  -bottom-24  w-[50vw]"
                alt=""
            />

            <div>
                <Image src={Landing} alt="Logo" className="my-12" />
            </div>

            <p className="md:px-56 md:text-xl text-sm lg:text-center text-justify flex justify-center items-center px-4 mb-8">
                GDSC WoW Kerala is a community of students and developers who are passionate about Google technologies.
                We are a part of Google Developers Student Clubs, a program for students to learn about Google
                technologies and build solutions for their local communities.
            </p>
            <div className="w-[50vw] flex flex-col md:flex-row justify-end items-center md:justify-center pt-8">
                <div
                    className="apply-button"
                    data-hackathon-slug="wowhackathon"
                    data-button-theme="dark-inverted"
                    style={{ height: '44px', width: '312px' }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
