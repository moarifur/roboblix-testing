import React from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import roboblix from "../assets/roboblix.png";
import BusterDroneCanvas from "./canvas/BusterDrone.jsx";

const Hero = () => {
    const heroText = `
    mt-0 ml-[10px] h-[300px] w-[520px]
    font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-stone-400
    lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]
    `
    // const heroText = `
    // mt-0 h-[300px] w-[520px]
    // font-bold text-white
    // lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]
    // `

    const heroSubtext = `
    mt-[25px] h-[200px] w-[400px]
    font-bold text-teal-800
    lg:text-[45px] sm:text-[45px] xs:text-[35px] text-[30px] lg:leading-[55px]
    `
    // const heroSubtext = `
    // mt-0 h-[200px] w-[400px]
    // animated-text
    // lg:text-[50px] sm:text-[60px] xs:text-[40px] text-[40px] lg:leading-[55px]
    // `

   return (
        <section className={`relative w-full h-screen mx-auto heroBG`}>
            <div className={`absolute inset-0 top-[70px] max-w-7xl mx-auto sm:px-16 px-4 flex flex-row items-start gap-3`}>
                <img src={roboblix} alt="Side Logo"/>
                <div className="h-[500px] w-[2px] bg-gradient-to-b from-cyan-600 to-cyan-100"></div>
                <div className="h-[400px] w-[2px] bg-gradient-to-b from-teal-500 to-teal-100"></div>
                <div className="h-[300px] w-[2px] bg-gradient-to-b from-slate-400 to-purple-100"></div>
                <h1 className={heroText}>Bring Your Imagination To Life</h1>
                <div className="h-[250px] w-[2px] bg-gradient-to-b from-slate-400 to-purple-100"></div>
                <div className="h-[200px] w-[2px] bg-gradient-to-b from-teal-500 to-teal-100"></div>
                <div className="h-[150px] w-[2px] mr-5 bg-gradient-to-b from-cyan-600 to-cyan-100"></div>
                <div className={heroSubtext}>
                    <Typewriter
                        options={{
                            strings: ['Train Your Child With Future Robotics...', 'A World Class Talent Hunt Program For Kids...'],
                            autoStart: true,
                            loop: true,
                            delay: 180,
                            pauseFor:3000
                        }}
                    />
                </div>
            </div>

            {/*-------------- 3D Animation -------------------------*/}
            <div className={`absolute inset-0 h-screen w-full`}>
                <BusterDroneCanvas />
            </div>

            {/*--------------- Scrolling Animation ------------------*/}
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;