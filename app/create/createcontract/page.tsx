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
                      
                        className="bg-white bg-opacity-25 min-h-[200px] w-[550px] p-4 rounded-lg    "
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex flex-col justify-around h-full space-y-4 items-center p-3 w-full">
                            <motion.h1 variants={itemVariants}>Create A New Bet</motion.h1>
                            <motion.div className=" space-y-4 w-full" variants={itemVariants}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={getTitke}
                                    className="w-full h-4"
                                />
                            </motion.div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                        </div>
                    </motion.div>
            
                    <motion.div
                      
                        className="bg-white bg-opacity-25 min-h-[200px] w-[550px] p-4 rounded-lg flex justify-between items-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex flex-col justify-around h-full space-y-4 items-center p-3 w-full">
                            <motion.h1 variants={itemVariants}>Create A New Bet</motion.h1>
                            <motion.div className=" space-y-4 w-full" variants={itemVariants}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={getTitke}
                                    className="w-full h-4"
                                />
                            </motion.div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                        </div>
                    </motion.div>
            
                    <motion.div
                      
                        className="bg-white bg-opacity-25 min-h-[200px] w-[550px] p-4 rounded-lg flex justify-between items-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex flex-col justify-around h-full space-y-4 items-center p-3 w-full">
                            <motion.h1 variants={itemVariants}>Create A New Bet</motion.h1>
                            <motion.div className=" space-y-4 w-full" variants={itemVariants}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={getTitke}
                                    className="w-full h-4"
                                />
                            </motion.div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                        </div>
                    </motion.div>
            
                    <motion.div
                      
                        className="bg-white bg-opacity-25 min-h-[200px] w-[550px] p-4 rounded-lg flex justify-between items-center"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="flex flex-col justify-around h-full space-y-4 items-center p-3 w-full">
                            <motion.h1 variants={itemVariants}>Create A New Bet</motion.h1>
                            <motion.div className=" space-y-4 w-full" variants={itemVariants}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={getTitke}
                                    className="w-full h-4"
                                />
                            </motion.div>
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem culpa dolore facilis aperiam non laborum commodi, sed porro saepe atque consequatur ipsum aliquam eos! Nihil dolorum earum voluptatem totam reprehenderit?</div>
                        </div>
                    </motion.div>
            
            </div>
            <div></div>
        </>
    );
}