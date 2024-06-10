import { WalletProvider } from "@mysten/wallet-adapter-react";
import { WalletStandardAdapterProvider } from "@mysten/wallet-adapter-all-wallets";

import Navbar from "@/components/navbar";
import Sample from "@/components/sample";
import Scroll from "@/components/scrollandother";
import Homecomponent from "@/components/Home";
import Test from "@/components/test1";
import Footer from "@/components/Fotter";
export default function App() {

  const supportedWallets = [
    new WalletStandardAdapterProvider(),
  ];
  return (
  //  <>
    <WalletProvider supportedWallets={supportedWallets} >
{/* <Sample/> */}
{/* <Scroll/> */}
<Navbar/>
{/* 👇Homepage */}
 <Test />   
 <Footer/>
 </WalletProvider>

 

  //  </>
  );
}
