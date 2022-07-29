import Router  from 'next/router'
import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AlgoContext } from '../provider/context'





function Admin() {

  const {CheckAlgoSigner,ConnectAlgoSigner,currentAccount} = useContext(AlgoContext)

console.log("account =",currentAccount)


  return (
    <div className='bg-bg-img w-screen h-screen'>
  
      
        
    <button onClick={()=>{}}></button>
    <div className="flex w-full justify-center items-center">
<div className="flex mf:flex-row flex-col items-start justify-between  ">
  
   
     {currentAccount ? <div></div> : <button
        type="button"
        onClick={ConnectAlgoSigner}
        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
         <AiFillPlayCircle className="text-white mr-2" />
        <p className="text-white text-base font-semibold">
          Connect Wallet
        </p>
        </button>
        }
      
       
     
  
  </div>
  
<div className='flex mt-10'>
<button onClick={()=>Router.push("/createAsset")} className="flex m-4 flex-row justify-center items-center my-5 bg-[#9ba7d0] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">Create an Asset</button>
<button  className="flex m-4 flex-row justify-center items-center my-5 bg-[#9ba7d0] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">Register Student</button>
</div>
  
</div>

 
  

</div>
  )
}

export default Admin