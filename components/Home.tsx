"use client"
import Image from 'next/image';
import heroimg from "@/public/next.svg";

    export default function Home(){
        return(
            <>
            
            <div className=" w-auto h-[800px] bg-slate-50 grid grid-row" style={{ background:"#C4C4C4", opacity:30}}>
                <div className="" >
                <div className='w-1/2'>
                    <div className="m-auto"><h1 className=" text-center">Middle East Leader in Market Making and OTC transactions</h1></div>
                    </div>
                </div>
                <div className='w-full'> 
                <Image src={heroimg}   alt="Hero Image" className="bg-cover w-full m-auto"/>
                </div>
            </div>

            {/*  */}

            <div className=' '>

            </div>
            </>
        )
    }   