/*global AlgoSigner*/
import React, {useContext, useRef, useState} from "react";


import { AlgoContext } from "../provider/context";
const algosdk = require("algosdk");

const FormStyle=({placeholder,onChange})=>(
  

    <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white  text-lg white-glassmorphism border-b-2 border-gray-400 border-solid" placeholder={placeholder} onChange={onChange} />
    
);

const TOKEN = {'X-API-Key': process.env.NEXT_PUBLIC_TOKEN};
const ALGOD_SERVER = process.env.NEXT_PUBLIC_ALGOD_SERVER;
const PORT = process.env.NEXT_PUBLIC_PORT;

console.log(TOKEN)
console.log(ALGOD_SERVER)
console.log(PORT)

const CreateAsset = () => {

    const {currentAccount} =useContext(AlgoContext)
    
    const assetName = useRef()
    const unitName = useRef()
    const totalUnit = useRef()
    const note = useRef()
    const assetUrl = useRef()
    const [isLoading, setLoading] = useState(false)

    
    // const kc=new algosdk.Algodv2(TOKEN,currentAccount)
    
    // let wallets = client.listWallets().wallets;
    // console.log(wallets)
   const wallet = async()=>{
    let client =   new algosdk.Kmd(TOKEN, ALGOD_SERVER, PORT)
    let walletid = null;
    let wallets = (await client.listWallets()).wallets;
    // wallets.forEach(function (arrayItem) {
    //     if( arrayItem.name === 'Admin'){
    //         walletid = arrayItem.id;
    //     }
    // });
    // console.log("Got wallet id",walletid)
   }



    const createAsset = async () =>{
        // await AlgoSigner.connect();
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)


                
        //Query Algod to get testnet suggested param
        let txParamsJS = await client.getTransactionParams().do()
        let note=AlgoSigner.encoding.stringToByteArray(note.current)
        let addr =currentAccount;
        let totalIssuance=1;
        let reserve=currentAccount;
        let freeze= currentAccount;
        let clawback= currentAccount;
        let defaultFrozen= false;
        let decimals =0;
        let unitName=unitName.current;
        let assetName=assetName.current;
        let assetUrl= assetUrl.current;
        let manager =currentAccount;

        try{
        
            const txn = await new algosdk.makeAssetCreateTxnWithSuggestedParams(addr,note,totalIssuance,decimals,defaultFrozen,manager,reserve,freeze,clawback,unitName,assetName,assetUrl,txParamsJS)
            
              let rawSignedTxn = txn.signTxn(currentAccount)
              let tx = await client.sendRawTransaction(rawSignedTxn).do();
              let assetID = null;
              const ptx = await algosdk.waitForConfirmation(client, tx.txId, 4);
              assetID = ptx["asset-index"];
              //Get the completed Transaction
              console.log("Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]);



            // const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());

            //  let signedTxs  = await AlgoSigner.signTxn([{txn: txn_b64}])
            //   console.log(signedTxs)

            //   // Get the base64 encoded signed transaction and convert it to binary
            // let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);

            //  // Send the transaction through the SDK client
            // let id = await client.sendRawTransaction(binarySignedTx).do();
            //     console.log(id)
            //     setLoading(false)
           

        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    return(
    <div className="bg-bg-img w-screen h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-30 border-r-2 p-7 w-[400px] flex flex-col items-center ">
            <div>
            <h1 className="text-white font-extrabold text-3xl pb-4">Create Asset</h1>
            <FormStyle onChange = {(e) => assetName.current = e.target.value} placeholder="Asset name" /><br/>
            <FormStyle onChange = {(e) => unitName.current = e.target.value} placeholder="Unit name" /><br/>
            <FormStyle onChange = {(e) => totalUnit.current = e.target.value} placeholder="Total units" /><br/>
            <FormStyle onChange = {(e) => assetUrl.current = e.target.value} placeholder="Asset url" /><br/>
            <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Enter note" /><br/>
            <button className="m-2 mt-7 text-white bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-blue-400 py-2 px-4 border border-white-500 hover:border-blue-300 rounded" onClick ={wallet}>{isLoading ? "loading...": "Sign Create Asset"}</button>
            </div>
            
        </div>
    </div>
    )
}

export default CreateAsset