"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "../../../components/style.css";

export default function Bett() {
    const [title, setTitle] = useState("");

    const getTitke = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className=" gap-12 flex flex-row justify-around h-screen w-[150vw] p-12">
                <motion.div
                    className="flex flex-col justify-center items-center h-full"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div className="flex flex-col justify-center items-center h-full" variants={itemVariants}>
                        <div className="arrow">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </motion.div>
                </motion.div>

                    <motion.div
                      
                        className="bg-white bg-opacity-25 min-h-[200px] w-[550px] rounded-lg    "
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="w-full h-16  bg-sky-200 hover:bg-sky-300 "> <h1 className=
                        ' font-mono uppercase text-black text-2xl  p-4 '>Step 1</h1>
                        </div>
                        <div className="flex flex-col justify-around h-[32rem] bg-rose-600 space-y-2 items-center p-3 w-full">
                            <motion.h1 variants={itemVariants}> <h1 className="text-2xl font-mono ">Titile / Subject For Your Contract</h1> </motion.h1>
                            <motion.div className="  w-full bg-white bg-opacity-20 " variants={itemVariants}>
                              
                                <textarea
                                    className="w-full h-36 text-black text-lg p-3" 
                                    placeholder="here" 
                                    > </textarea>
                            </motion.div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                        </div>
                    </motion.div>
            
                    <motion.div
                      
                      className="bg-white bg-opacity-25 min-h-[200px] w-[550px] rounded-lg    "
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                  >
                      <div className="w-full h-16  bg-sky-200 hover:bg-sky-300 "> <h1 className=
                      ' font-mono uppercase text-black text-2xl  p-4 '>Step 2</h1>
                      </div>
                      <div className="flex flex-col justify-around h-[32rem] bg-rose-600 space-y-2 items-center p-3 w-full">
                          <motion.h1 variants={itemVariants}> <h1 className="text-2xl font-mono ">Titile / Subject For Your Contract</h1> </motion.h1>
                          <motion.div className="  w-full bg-white bg-opacity-20 " variants={itemVariants}>
                            
                              <textarea
                                  className="w-full h-36 text-black text-lg p-3" 
                                  placeholder="here" 
                                  > </textarea>
                          </motion.div>
                          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                      </div>
                  </motion.div> <motion.div
                      
                      className="bg-white bg-opacity-25 min-h-[200px] w-[550px] rounded-lg    "
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                  >
                      <div className="w-full h-16  bg-sky-200 hover:bg-sky-300 "> <h1 className=
                      ' font-mono uppercase text-black text-2xl  p-4 '>Step 3</h1>
                      </div>
                      <div className="flex flex-col justify-around h-[32rem] bg-rose-600 space-y-2 items-center p-3 w-full">
                          <motion.h1 variants={itemVariants}> <h1 className="text-2xl font-mono ">Titile / Subject For Your Contract</h1> </motion.h1>
                          <motion.div className="  w-full bg-white bg-opacity-20 " variants={itemVariants}>
                            
                              <textarea
                                  className="w-full h-36 text-black text-lg p-3" 
                                  placeholder="here" 
                                  > </textarea>
                          </motion.div>
                          <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                      </div>
                  </motion.div>           
                    
            
            </div>
            <div></div>
        </>
    );
}