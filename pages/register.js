import React from 'react'

const Input=({placeholder,name,type})=>{
    return(
<input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder={placeholder} name={name} type={type}/>

    )

}
const handleSubmit=(e)=>{
  e.preventDefault
}

function Register() {
  return (
    <div className='h-screen w-screen bg-bg-img flex items-center justify-center  '>
        <div className="flex justify-center items-center flex-col bg-black bg-opacity-30 border-r-2 p-7">
    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
      Register <br /> Student
    </h1>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">

<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
  
  <Input placeholder="Student Name"  name="studentName" type="text"  />
  <Input placeholder="Email" name="email"  type="email"  />
  
  

  <div className="h-[1px] w-full bg-gray-400 my-2" />
  
  
  
    
      <button
        type="button"
        onClick={()=>{}}
        className="text-white font-bold w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
       Register
      </button>
   
</div>
</div>
</div>
    </div>
  )
}

export default Register