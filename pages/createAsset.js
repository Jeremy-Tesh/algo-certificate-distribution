/*global AlgoSigner*/
import React, {useContext, useRef, useState} from "react";

// import { TransactionButton } from "../Button.styles";


import { AlgoContext } from "../provider/context";
const algosdk = require("algosdk");

const FormStyle=({placeholder,onChange})=>(
  

    <input className="mb-[20px] w-[200px] p-[10px] border-r-[5px] border-[#245EC7]" placeholder={placeholder} onChange={onChange} />
    
);

const TOKEN = {'X-API-Key': process.env.REACT_APP_TOKEN};
const ALGOD_SERVER = process.env.REACT_APP_ALGOD_SERVER;
const PORT = process.env.REACT_APP_PORT;



const CreateAsset = () => {

    const {currentAccount} =useContext(AlgoContext)
    
    const assetName = useRef()
    const unitName = useRef()
    const totalUnit = useRef()
    const note = useRef()
    const decimals = useRef()
    const [isLoading, setLoading] = useState(false)

    const createAsset = async () =>{
        // await AlgoSigner.connect();
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
                
        //Query Algod to get testnet suggested param
        let txParamsJS = await client.getTransactionParams().do()

        try{
        
            const txn = await new algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
                from: currentAccount,
                assetName: assetName.current,
                unitName: unitName.current,
                total: +totalUnit.current,
                decimals: +decimals.current,
                note: AlgoSigner.encoding.stringToByteArray(note.current),
                suggestedParams: {...txParamsJS},
                
              });
            
            const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());

             let signedTxs  = await AlgoSigner.signTxn([{txn: txn_b64}])
              console.log(signedTxs)

              // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);

             // Send the transaction through the SDK client
            let id = await client.sendRawTransaction(binarySignedTx).do();
                console.log(id)
                setLoading(false)

        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    return(
    <div className="bg-bg-img w-screen h-screen flex items-center justify-center">
        <div>
            <h1>Create Asset</h1>
            <FormStyle onChange = {(e) => assetName.current = e.target.value} placeholder="Asset name" /><br/>
            <FormStyle onChange = {(e) => unitName.current = e.target.value} placeholder="Unit name" /><br/>
            <FormStyle onChange = {(e) => totalUnit.current = e.target.value} placeholder="Total units" /><br/>
            <FormStyle onChange = {(e) => decimals.current = e.target.value} placeholder="Decimals" /><br/>
            <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Enter note" /><br/>
            <button  onClick ={createAsset}>{isLoading ? "loading...": "Sign Create Asset"}</button>
        </div>
    </div>
    )
}

export default CreateAsset