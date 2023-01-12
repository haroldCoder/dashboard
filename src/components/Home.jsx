import React, { useEffect, useState } from 'react'
import { data } from '../data'
import Login from './Login'

export default function Home() {
  return (
    <div className='flex mt-16'>
        <div className='grid gap-6 grid-cols-1'>
            {
                data.map(e=>(
                    <div className='bg-gray-600 w-72 h-20 rounded-md py-1 px-4'>
                        <h2 className='text-blue-500'>{e.name}</h2>
                        <div className='flex'>
                            <section className='flex flex-col'>
                                <h5 className='text-neutral-300'>{e.email}</h5>
                                <h5 className='text-neutral-300'>{e.cel}</h5>
                            </section>
                            <section className='flex justify-end w-[50%]'>
                                <img src={e.photo} alt="" className='w-10 h-10' />
                            </section>
                        </div>
                    </div>
                ))
            }
            </div>
            <Login logp={true} post={true}/>
    </div>
  )
}
