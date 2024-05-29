"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../components/style.css";
// import Image from "next/image";
// import imgtr from "@/public/next.svg";
// import A1 from "@/public/AnimeX1.jpeg";
// import A2 from "@/public/AnimeX2.jpeg";
// import A3 from "@/public/AnimeX3.jpeg";
// import demo from "framerUseStarter/framersample/public/QuizApp Working recording.mp4";

export default function  App() {
    const { scrollY, scrollX } = useScroll();
    const xTransform = useTransform(scrollX, [1450, 100], [-200, 50]);
    const yTransform1 = useTransform(scrollY, [550, 600], [50, 0]);
    const yTransform2 = useTransform(scrollY, [550, 600], [-100, 0]);
    const yTransform3 = useTransform(scrollY, [550, 600], [-250, 0]);

    const [ref, inView] = useInView({
        threshold: 0.6,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 100 }
    };

    return (
        <>
        <motion.div 
        initial={{opacity:0}}
        animate={inView ? 'hidden' : 'visible'}
        exit={{opacity:0}}
       variants={variants}
        transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
        className='container bg-white w-full h-[36rem] flex justify-center items-center mt-12 m-auto bg-opacity-65'>
            <div className="bg-white flex  h-24 justify-center rounded-lg p-4">
        <button className='text-center text-6xl  text-black'>Connect Wallet</button>    </div>    
        </motion.div>

        <div className='mt-32'>
            <motion.div className="box"  style={{ y: yTransform1,background: 'white', x: 0, display: "flex", justifyContent: "center", overflow:"hidden" }}>
                <h1 className=' text-center text-6xl m-auto text-black'>Create </h1>
                {/* <Image src={A1} alt="image" className=' bg-cover' /> */}

            </motion.div>
            
            <motion.div className="box flex justify-center" transition={{duration:2}} style={{ y: yTransform2, x: 0, background: 'white' }}>
                {/* <div className=' '> */}
                    {/* <div className='flex justify-center'> */}
                        <h1 className=' text-center text-6xl m-auto text-black'>Sign</h1>
                        {/* <Image src={A2} alt="image" className='bg-cover h-24  object-contain' /> */}
                    {/* </div> */}
                    {/* <div className='w-1/2'>
                        {/* <Image src={A3} alt="image" className='bg-cover h-24  m-auto object-contain' />  </div> */}
                {/* </div> */}
            </motion.div>

            <motion.div className="box flex justify-center" transition={{duration:2}} style={{ y: yTransform3, x: 0 ,background: 'white'}}>
                <h1 className="text-center text-6xl m-auto text-black" >Own</h1>
            </motion.div></div>

            <div style={{ height: 500 }} />

            {/* <div style={{ position: 'fixed', top: 0, left: 0 }}>
                {'is in view? ' + inView}
            </div> */}

            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
                ref={ref}
                className="magic"
            >
                <div className='flex justify-center items-center w-full bg-green-200 h-full'>
                {/* <h1 className="text-black">Hello123</h1> */}
                {/* <Image src={imgtr} alt="image" className='bg-cover w-full p-24' /> */}
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/watch?v=4HRC6c5-2lQ"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            </motion.div>

            {/* <motion.div 

        initial={{opacity:0}}
        
        animate={inView ? 'visible' : 'hidden'}
      
        exit={{opacity:1}}
       variants={variants}
        transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
         className=' container mt-1 bg-white w-full h-[20rem] flex justify-center m-auto'>
        </motion.div> */}
        <h1 className='text-center text-6xl m-auto text-black'>Look 👀 Up there ☝</h1>        

        <div className='pt-[60px]'>
            <motion.div className="box" style={{ y: 0,background: 'white', x: 0, display: "flex", justifyContent: "center", overflow:"hidden" }}>
                <h1 className=' text-center text-6xl m-auto text-black'>Create </h1>
                {/* <Image src={A1} alt="image" className=' bg-cover' /> */}

            </motion.div>
            
            <motion.div className="box flex justify-center" style={{ y: 0, x: 0, background: 'white' }}>
                {/* <div className=' '> */}
                    {/* <div className='flex justify-center'> */}
                        <h1 className=' text-center text-6xl m-auto text-black'>Sign</h1>
                        {/* <Image src={A2} alt="image" className='bg-cover h-24  object-contain' /> */}
                    {/* </div> */}
                    {/* <div className='w-1/2'>
                        {/* <Image src={A3} alt="image" className='bg-cover h-24  m-auto object-contain' />  </div> */}
                {/* </div> */}
            </motion.div>

            <motion.div 
            initial={{opacity:0}}
            // scale={{}}
            transition={{duration:"1"}}
            animate={{opacity:1}}
             exit={{opacity:1}}        
          

            className="box flex justify-center"   style={{  background: 'white'}}>
                <h1 className="text-center text-6xl m-auto text-black" >Own</h1>
            </motion.div></div>



            <motion.div 
        initial={{opacity:0}}
        animate={inView ? 'hidden' : 'visible'}
        exit={{opacity:0}}
       variants={variants}
        transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
        className='container bg-white w-full h-[20rem] flex justify-center items-center m-auto bg-opacity-65'>
            <div className="bg-white flex  h-24 justify-center rounded-lg p-4">
        <button className='text-center text-6xl  text-black'>Connect Wallet</button>    </div>    
        </motion.div>
        </>
    );
}