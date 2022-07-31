

import { useState, useEffect } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


import algosdk from 'algosdk';

function Trainee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [assetID, setAssetId] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState('');
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    getAccounts();
   
  }, []);
  const AccountList = () => {
    return accounts.map((account) => {
      return (
        <DropdownItem
          key={account.address}
          onClick={(e) => {
            setAccount(e.target.innerHTML);
          }}
        >
          {account.address}
        </DropdownItem>
      );
    });
  };
  const getAccounts = async () => {
    await AlgoSigner.connect();
    await AlgoSigner.accounts({
      ledger: 'TestNet',
    })
      .then((d) => {
        setAccounts(d);
        setAccount(d[0].address)
       
       
      })
      .catch((e) => {
        console.error(e);
      });

     
  };
 
 

//   const optinTx = async (txId) => {
//     let txConf = await fetch('https://tenxdapp.herokuapp.com/api/v2/nft/opt', {
//       // Adding method type
//       method: 'POST',

//       // Adding body or contents to send
//       body: JSON.stringify({
//         txId,
//         name,
//         email,
//         address: account,
//         asset_id: assetID,
//       }),

//       // Adding headers to the request
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });

    // txConf = await txConf.json();
    // console.log(txConf);
//   };
  const handleOptin = async () => {
    // console.log(name, email, address, assetID);
    // fetch('https://tenxdapp.herokuapp.com/api/v/trainees/optin', {
        console.log(accounts)
    if (account === '') {
      alert('Please select an account before opting in for an asset!');
      return;
    }
    // let res = await fetch('https://tenxdapp.herokuapp.com/api/v2/nft/optin', {
    //   // Adding method type
    //   method: 'POST',

    //   // Adding body or contents to send
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     address: account,
    //     asset_id: parseInt(assetID),
    //   }),

    //   // Adding headers to the request
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // });
    // res = await res.json();
    // if (res.status === 'fail') {
    //   alert('something happened...');
    //   return;
    // }
    
    const txn = new algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
      from:account,
      to:account,
      assetIndex:assetID,
      note:name,
    });
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    const signedTxs = await AlgoSigner.signTxn([{ txn: txn_b64 }]);
    // alert(JSON.stringify(signedTxs, null, 2));
    alert('successfully signed transaction!');
    const tx = await AlgoSigner.send({
      ledger: 'TestNet',
      tx: signedTxs[0].blob,
    });

    await optinTx(tx.txId);
    // .then((res) => res.json())
    // .then((res) => {
    //   if (res.status === 'fail') {
    //     console.log(res);
    //     alert(res.message);
    //   } else {
    //     alert('Request Sent to Admin!');
    //     window.location.reload(true);
    //   }
    // });
  };

  return (
    <div className='h-screen w-screen'>
      <div className="h-full bg-bg-img flex flex-col justify-center items-center ">
       
         
          
            
               
               
               
               
                     
                        <label>Full Name</label>
                        <Input
                          placeholder="your-full-name"
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                        />
                    
                     
                        <label>Email</label>

                        <Input
                          placeholder="email"
                          type="text"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                     
                  {/* <Row>
                    <Col md="6">
                      <FormGroup>
                       
                      </FormGroup>
                    </Col>
                  </Row> */}
                   <label>Public Address</label>
                        <Input
                          placeholder="0x390f0f9fk930kf39k3mfe9"
                          type="text"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                 
                     
                        <label>Asset-ID</label>

                        <Input
                          placeholder="8594322"
                          type="text"
                          onChange={(e) => setAssetId(e.target.value)}
                        />
                   
             
                <button
                  className="flex flex-row justify-center items-center font-bold my-5 bg-[#c8cec8]  px-6 p-3 rounded-full cursor-pointer hover:bg-[#2e3036] hover:text-white text-black"
                  
                  type="submit"
                  onClick={handleOptin}
                >
                  Opt-in
                </button>
             
           
          
          
       
      </div>
     
        
        
   
    </div>
  );
}

export default Trainee;