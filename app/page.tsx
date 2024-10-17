import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <>
        <div className="flex flex-col justify-center items-center md:flex-row bg-slate-900 text-white min-h-screen">
        <div className='w-2/4 justify-center items-center block md:w-full md:hidden '>
    <Image src="/Mypic.png" height={300} width={300} alt='picture' className='mb-6 ml-8'/>
  </div>
  <div className='flex flex-col w-full px-10 text-center md:w-2/3 md:text-start'>
    <h2 className='text-2xl font-bold mb-3 animate-bounce'>THIS IS OWAIS KHAN</h2>
    <h1 className='text-5xl font-black mb-7'>FRONT-END WEB DEVELOPER</h1>
    <p className='text-xl'>
      I'm a passionate developer always looking to improve my skills. I've worked with tools like Vite, React, Next.js, and Tailwind CSS, and hosted some of my projects on Vercel. I enjoy the challenge of figuring things out on my own and am always pushing myself to grow as a developer.
    </p>
  </div>
  <div className='w-full justify-center hidden md:w-2/5 md:block '>
    <Image src="/Mypic.png" height={600} width={400} alt='picture' className='origin-bottom -rotate-12'/>
  </div>
</div>

    </>
  )
}
