"use client";
import "../components/style.css"; // Ensure this path is correct
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateContract() {
  const router = useRouter();

  const createContract = () => {
    router.push("/create/createcontract"); // Replace with your desired route
  };

  return (
    <>
      <div className="h-auto w-full bg-white bg-opacity-10">
        <div className="h-[80px] w-full flex flex-col justify-center">
          <div className="flex justify-around gap-24 mx-4">
            <div className="text-3xl font-semi-bold">
              <Link href="/">AlphaBet</Link>
            </div>
            <div>
              <div className="text-lg flex gap-4">
                <Link href="/create">Create</Link>
                <Link href="/explore">Explore</Link>
                <Link href="/learn">Learn</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-opacity-20 w-[80%] p-4 mt-12 gap-4 m-auto justify-between h-96 bg-gray-50">
        <div className="flex justify-between flex-col items-center">
          <div className="bg-white rounded-md w-2/4">
            <button
              onClick={() => router.push("/create/createbet")}
              className="text-2xl p-4 w-full font-bold text-center text-black"
            >
              Create Bet
            </button>
          </div>
          <p className="rounded-lg p-2 text-left text-black bg-opacity-80 w-[80%] bg-white mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            consequuntur laudantium, animi vitae modi quidem cumque dignissimos
            eveniet culpa voluptatem dolorem, corrupti alias assumenda! Fugit
            ducimus veritatis fugiat corporis voluptas!
          </p>
        </div>
        <div className="flex justify-between flex-col items-center">
          <div className="bg-white rounded-md w-2/4">
            <button
              onClick={createContract}
              className="text-2xl p-4 w-full font-bold text-center text-black"
            >
              Create Contract
            </button>
          </div>
          <p className="rounded-lg p-2 text-left text-black bg-opacity-80 w-[80%] bg-white mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            consequuntur laudantium, animi vitae modi quidem cumque dignissimos
            eveniet culpa voluptatem dolorem, corrupti alias assumenda! Fugit
            ducimus veritatis fugiat corporis voluptas!
          </p>
        </div>
      </div>
      <div className="flex items-center bg-opacity-20 w-[80%] p-4 mt-12 gap-4 m-auto justify-between h-96 bg-gray-50 mb-24"></div>
    </>
  );
}