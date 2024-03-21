
import Navbar from "./components/Navbar";
import {ethers} from "ethers"
import Deposit from "./components/Deposit";
import Details from "./components/Details";
import { useState,useEffect } from "react";
import ABI from "../../artifacts/contracts/Bank.sol/Bank.json";
import "./App.css";

function App() {
 const[account,setAccount]=useState("None");
 const[state,setState]= useState({
  provider:null,
  signer:null,
  contract:null
 })
 const contractAddress="0x565F84D09C9bc5032eA89A515599070148E9eb4a";
 const contractAbi=ABI.abi;

 useEffect(()=>{
  
  const connectWallet=async ()=>{
    try{
      if(window.ethereum==null){
        console.log("Please install metamask first!");
      }
      else{
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
         const provider=new ethers.BrowserProvider(window.ethereum);
         const signer=await provider.getSigner();
         const contract=new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
         );
         setAccount(account);
         setState({provider,signer,contract});
        //  console.log(contract);
      }
    }
    catch(error){
      console.log(error);
    }
  }
  connectWallet()
 },[]);
 console.log(account);
//  console.log(state);

  return (
    <div className="app">
      <Navbar />
      <p>🟢Connected Account:<span className="span">{account}</span></p>
      <Deposit  states={state}/>
      <Details states={state}/>
    </div>
  );
}

export default App;
