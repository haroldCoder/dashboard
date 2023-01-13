import React from 'react'
import woman from '../imgs/woman.png'
import man from '../imgs/man.png'

export default function Profile() {
  return (
    <div className='flex p-12 flex-col'>
        <div className='flex justify-center w-[100%] mb-7'>
            <img style={{width: "15%"}} src={localStorage.getItem("gender") == "male" ? man : (localStorage.getItem("gender") == "female" ? woman : null)} alt="" />
        </div>
        <div className='flex flex-wrap content-center w-[100%] flex-col'>
            <h2 className='text-white text-center mb-4 text-2xl'>{localStorage.getItem("user")}</h2>
            <p className='text-gray-800 text-lg'>{localStorage.getItem("email")}</p>
        </div>
    </div>
  )
}
