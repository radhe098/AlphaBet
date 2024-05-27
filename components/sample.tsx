"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import logo from "@/public/next.svg";
import Image from 'next/image';
export default function Sample(){
    
    const [visible, setvisible] = useState(true);

    return(
        <>
       <div className=" flex justify-center "> <button className="p-2 border border-black rounded-md " onClick={()=>setvisible(!visible)} > click here</button>
        </div>

        <div style={{display:"grid",
        placeContent:"center",
        height:"100vh",
        gap:"0.8rem"
        }}>
            <AnimatePresence>
        { visible &&
            <motion.div 
            initial={{rotate:"0deg", scale:0}}
            animate={{rotate:"0deg", scale:1 , y:[ 0, 100 ,-200,0]}}
            transition={{duration:"1"}}
            exit={{rotate:"0deg",scale:0 }}
            style={{width:150, height:150}}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="y"
            dragPropagation
            dragDirectionLock
  onDirectionLock={axis => console.log(axis)}

    
            whileDrag={{ scale: 1.2 }}
            dragConstraints={{ left: -400, right: 100 }}
            dragMomentum={false}
            >   
           
            {/* image */}
            <Image 
            src={logo} 
            quality={100} 
            layout="fill" 
            // objectFit="cover" 
            alt="Hero Image" 
        />
            </motion.div> } 
            </AnimatePresence>

        </div>

        </>

    )
}