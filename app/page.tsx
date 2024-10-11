import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className="h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex justify-center content-center flex-col text-center items-center">
          <h1 className=" relative font-black cursor-s-resize text-green-700 text-7xl m-3">
            TECH EXPERT
          </h1>
          <h2 className="text-5xl font-bold m-5">
            Welcome to Owais Khan Portfolio Page
          </h2>
          <Image src="/Mypic.jpg" height={100} width={300} alt='picture' className='rounded-full p-6'
           />
        </div>
      </div>
    </>
  )
}
