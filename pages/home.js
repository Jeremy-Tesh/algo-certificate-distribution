import React from 'react'
import Router from 'next/router'

function Home() {
  return (
    <div className='h-full w-screen' >
      <div className="flex justify-center bg-bg-img items-center  h-screen w-screen">
      <button onClick={()=>Router.push("/admin")} className="m-2 text-white bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-blue-400 py-2 px-4 border border-white-500 hover:border-blue-300 rounded">
  Admin
</button>
<button onClick={()=>Router.push("/trainee")} className="m-2 text-white bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-blue-400 py-2 px-4 border border-white-500 hover:border-blue-300 rounded">
  Trainee
</button>
</div>
     
    </div>
  );
}

export default Home;
