"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../components/style.css";
import Image from "next/image";
import imgtr from "@/public/next.svg";
import A1 from "@/public/AnimeX1.jpeg";
import A2 from "@/public/AnimeX2.jpeg";
import A3 from "@/public/AnimeX3.jpeg";

export default function App() {
    const { scrollY, scrollX } = useScroll();
    const xTransform = useTransform(scrollX, [0, 200], [0, 40]);
    const yTransform1 = useTransform(scrollY, [0, 100], [50, 0]);
    const yTransform2 = useTransform(scrollY, [0, 100], [-100, 0]);
    const yTransform3 = useTransform(scrollY, [0, 100], [-250, 0]);

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
            <motion.div className="box" style={{ y: yTransform1, x: 0, background: 'cyan', display: "flex", justifyContent: "center" }}>
                <Image src={A1} alt="image" className='bg-cover' />
            </motion.div>
            
            <motion.div className="box" style={{ y: yTransform2, x: 0, background: 'white' }}>
                <div className='flex justify-between p-4 gap-5 overflow-hidden'>
                    <div className='w-1/2'>
                        <Image src={A2} alt="image" className='bg-cover object-contain' />
                    </div>
                    <div className='w-1/2'>
                        <Image src={A3} alt="image" className='bg-cover m-auto object-contain' />
                    </div>
                </div>
            </motion.div>

            <motion.div className="box" style={{ y: yTransform3, x: xTransform }}>
                {/* Placeholder for additional content */}
            </motion.div>

            <div style={{ height: 500 }} />

            <div style={{ position: 'fixed', top: 0, left: 0 }}>
                {'is in view? ' + inView}
            </div>

            <motion.div
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 2, scale: { type: "spring", damping: 30, stiffness: 100, restDelta: 0.001 } }}
                ref={ref}
                className="magic"
            >
                <div className='text-center'>
                    <h1 className="text-black">Hello123</h1>
                    <Image src={imgtr} alt="image" className='bg-cover w-full p-24' />
                </div>
            </motion.div>
        </>
    );
}