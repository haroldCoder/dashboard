import React from 'react'
import woman from '../imgs/woman.png'
import man from '../imgs/man.png'

export default function Navbar() {
  return (
    <div className='bg-gray-600 h-20 w-100 flex justify-between p-5'>
        <h1 className='text-blue-300 text-2xl'>Dashboard</h1>
        {
            <img src={localStorage.getItem("gender") == "male" ? man : (localStorage.getItem("gender") == "female" ? woman : null)} alt="" />
        }
    </div>
  )
}
