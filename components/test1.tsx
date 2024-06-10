"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../components/style.css";
// import Image from 'next/image'; 

export default function App() {
    const { scrollY, scrollX } = useScroll();
    const xTransform = useTransform(scrollX, [1450, 100], [-200, 50]);
    const yTransform1 = useTransform(scrollY, [550, 600], [50, 0]);
    const yTransform2 = useTransform(scrollY, [550, 600], [-100, 0]);
    const yTransform3 = useTransform(scrollY, [550, 600], [-250, 0]);

    const [refConnectWallet, inViewConnectWallet] = useInView({
        threshold: 0.6,
        triggerOnce: false 
    });

    const [refOthers, inViewOthers] = useInView({
        threshold: 0.6,
        triggerOnce: true // This will make the other animations trigger only once
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0, y: 100 }
    };

    return (
        <>
            <motion.div 
            // style={{ backgroundImage: `url(${patternbg.src})` }}
                ref={refConnectWallet}
                initial={{ opacity: 0 }}
                animate={inViewConnectWallet ? 'visible' : 'hidden'}
                exit={{ opacity: 0 }}
                variants={variants}
                transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
                className='
                  w-auto h-[36rem] flex justify-center items-center mt-12 m-auto bg-opacity-65'
            >
                <div className="bg-white flex  justify-center rounded-xl p-2" >
                    <button className='text-center text-4xl text-black'>Connect Wallet</button>
                </div>    
            </motion.div>

            <div className='charmonman-regular mt-32'>
                <motion.div className="box bg-white" style={{ y: yTransform1, x: 0, display: "flex", justifyContent: "center", overflow: "hidden" }}>
                    <h1 className='text-center  m-auto text-black'>Create</h1>
                </motion.div>
                
                <motion.div className="box flex justify-center bg-white" transition={{ duration: 2 }} style={{ y: yTransform2, x: 0 }}>
                    <h1 className='text-center  m-auto text-black'>Sign</h1>
                </motion.div>

                <motion.div className="box flex bg-white justify-center" transition={{ duration: 2 }} style={{ y: yTransform3, x: 0 }}>
                    <h1 className="text-center  m-auto text-black">Own</h1>
                </motion.div>
            </div>

            <div style={{ height: 180 }} />

            <motion.div
                ref={refOthers}
                animate={inViewOthers ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
                className="magic"
            >
                <div className='flex justify-center items-center w-full bg-green-200 h-full rounded-lg '>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VK68-k_nHSQ?si=GxgY6Nys67wi9mci" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </motion.div>
        </>
    );
}