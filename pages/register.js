import React from 'react'

const Input=({placeholder,name,type})=>{
    return(
<input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" placeholder={placeholder} name={name} type={type}/>

    )

}

function Register() {
  return (
    <div>
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
      Register <br /> Student
    </h1>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">

<div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
  
  <Input placeholder="Employee Name"  name="employeeName" type="text"  />
  <Input placeholder="Address" name="address"  type="text"  />
  <Input placeholder="Range" name="allowedRange" type="number"  />
  

  <div className="h-[1px] w-full bg-gray-400 my-2" />
  
  
  
    
      <button
        type="button"
        onClick={()=>{}}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
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