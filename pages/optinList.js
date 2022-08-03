    import React, { useContext, useEffect, useState } from 'react'
    import Table from 'react-bootstrap/Table';
import { AlgoContext } from '../provider/context';

    
    function optinList() {

const {optinList,optinRequest} =useContext(AlgoContext)


console.log(optinList)


      return (
        <div className='h-screen w-screen  flex items-center justify-center'>
<div className='w-[800px] ' >
<Table  striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {optinList.map(req=>{
            return(
<tr>
          <td>{req.id}</td>
          <td>{req.name}</td>
          <td>{req.address}</td>
          <td><button className="m-2 mt-2 text-white bg-transparent hover:bg-white-500 text-black-700 font-semibold hover:text-blue-400 py-2 px-2 border border-white-500 hover:border-blue-300 rounded" onClick ={()=>{}}>approve</button></td>
        </tr>
            )
        })}
        
        
        
      </tbody>
    </Table>
</div>



        </div>
      )
    }
    
    export default optinList