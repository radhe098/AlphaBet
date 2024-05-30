"use client"
import Image from "next/image";
import img1 from "@/public/AnimeX2.jpeg";
import Link from 'next/link'

export default function Navbar(){
    const style1={ 
        backgroundImage:`url(${img1})`,
        backgroundSize:`cover`,
        backgroundPosition:`center`
    }
return(
        <>
            <div className="h-[100px] w-[full] bg-rose-100 flex flex-col justify-center " style={style1}> 
                <div className=" flex justify-around gap-24 mx-4 text-black ">
                    {/* popins */}
                    <div className="text-3xl font-semi-bold "> <Link href="/">AlphaBet</Link></div>     
                    <div> 
                        <div className="text-lg flex gap-4">
                      <Link href="/create">
                        Create 
                        </Link>
                        <Link href="/explore">
                            Explore
                        </Link>
                        <Link href="/learn">
                            Learn
                        </Link>
                        <Link href="/about">
                        About
                        </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}