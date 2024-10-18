import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
        <div className="flex flex-col justify-center bg-black text-white min-h-screen w-full">
          <div className='text-center'>
            <button className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl mt-5">
    <span className=" px-5 py-2.5 text-white bg-gray-900 rounded-3xl">
      SOCIAL MEDIA
    </span>
    </button>
    <h1 className='text-2xl md:text-4xl font-black mt-7'>CONNECT ME HERE</h1>
    </div>
    <div className='flex justify-around mt-20 flex-col items-center gap-y-5 p-5 md:flex-row'>
    <a href="https://www.facebook.com/profile.php?id=100080648762387" target="_blank" rel="noopener noreferrer" className='bg-slate-900 h-wide w-wide rounded-3xl flex items-center justify-center flex-col'>
                <Image src="/facebook.png" alt="Facebook"  height={60} width={60}/>
                <h2 className='mt-5'>FACEBOOK</h2>
              </a>
              <a href="https://www.instagram.com/this_is_.my_.username" target="_blank" className='bg-slate-900 h-wide w-wide rounded-3xl flex items-center justify-center flex-col'>
                <Image src="/instagram.png" alt="Instagram"  height={60} width={60}/>
                <h2 className='mt-5'>INSTAGRAM</h2>
              </a>
              <a href="https://www.linkedin.com/in/owais-khan-a957a02b4" target="_blank" className='bg-slate-900 h-wide w-wide rounded-3xl flex items-center justify-center flex-col'>
              <Image src="/linkdin.png" alt="Instagram"  height={60} width={60}/>
              <h2 className='mt-5'>LinkedIn</h2>
              </a>
    </div>
    </div>
  )
}
