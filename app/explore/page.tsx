import Sample from "@/components/sample"
export default function page(){
    return(
        <>
         {/* <Sample/>    */}
         <div className="w-full h-20 flex item-center p-2 justify-center "> 
         <h1 className="text-3xl font-bold  text-white">Ongoing Bets and Contracts </h1>
         </div>
       
            <div className=" space-y-5 bg-opacity-20  p-4 mt-2 m-auto  h-[100vh] bg-gray-50 ">
                
                <div className="w-full border border-white text-2xl item-center h-12 text-left flex justify-between px-12 ">
                    <h1 className=" text-white font-semibold p-2 "> Bet No 1</h1>
                    <h1 className=" text-white font-semibold p-2 "> Time Stamp /Expiry</h1>
                </div>
           </div>

        </>
    )
}