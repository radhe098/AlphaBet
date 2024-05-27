"use client"
export default function Navbar(){
return(
        <>
            <div className="h-[100px] w-[full] flex flex-col justify-center " style={{ background:"#F7F7F7"}}> 
                <div className=" flex justify-around gap-24 mx-4  ">
                    {/* popins */}
                    <div className="text-lg font-bold"> Logo</div>     
                    <div> 
                        <div className="text-lg flex gap-4">
                        <div>
                            Home
                        </div><div>
                            Companey
                        </div><div>
                            Blog
                        </div><div>
                            Services
                        </div><div>
                            Contact Us
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}