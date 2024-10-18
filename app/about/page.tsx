import React from 'react'

export default function AboutPage() {
  return (
    <div className='min-h-screen w-full bg-purple-500'>
      <div className='flex flex-col items-center p-6 '>
        <h1 className='font-black text-center text-2xl md:text-2xl lg:text-4xl text-slate-900 mb-3'>YOU CAN READ ABOUT MYSELF</h1>       
        <p className='text-xl md:text-2xl lg:text-3xl'>I am a passionate front-end web developer with a strong foundation in TypeScript, Javascript, React and next.js. My work is driven by a commitment to building efficient, responsive, and user-friendly applications. I thrive on tackling challenges, whether it&apos;s optimizing a project for performance, resolving display issues across different devices, or navigating complex hosting environments. My focus on continuous learning and adaptability keeps me at the forefront of web technologies, enabling me to deliver high-quality solutions that meet the needs of users. I am always eager to expand my knowledge and take on new projects that push the boundaries of my skills.</p>
        <div>

        <a href="/about/contact" className="w-32 inline-flex items-center justify-center p-1 bg-gradient-to-r from-purple-500 via-orange-500 to-yellow-300 rounded-3xl border-2 border-blue-800">
    <button className=" p-2 text-white  rounded-3xl ">
      contact me
  </button>
      </a>
        </div>
     
      </div>
      <div className='p-7'>
        <h1 className='text-2xl md:text-4xl font-black'>SKILLS:</h1>
        <ul className='text-xl font-semibold px-3'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACT.JS</li>
          <li>NEXT.JS</li>
        </ul>
        
      </div>
    </div>
  )
}
