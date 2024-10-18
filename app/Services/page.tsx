import Image from "next/image";


 export default function ProjectPage() {

  return (
    
    <div className="min-h-screen w-full bg-slate-950 text-white  ">
      <div className="flex flex-col">
      <div className="text-white font-bold text-center p-10 ">
      <button className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-3xl">
    <span className=" px-5 py-2.5 text-white bg-gray-900 rounded-3xl">
      My Services
    </span>
  </button>
  <h1 className="text-4xl mt-10 text-center">Take a look at my Recent Work</h1>
     </div>
     </div>

      <div className="grid md:grid-cols-3 justify-between p-4 ">
      <a
          href="https://dynamic-resume-builder-project.vercel.app/"
          target="main" className="mb-3"
        >
          <Image
            src="/project.png"
            width={200}
            height={200}
            alt="Project"
            className="rounded-3xl"
          />
      <h1 className="text-xl md:text-3xl">Dyamic resume builder in this web application you can edit your own resume</h1>
        </a>
        <a
          href="https://owaiskhan-todo-typescript-project.vercel.app"
          target="main" className="mb-3"
        >
          <Image
            src="/download.png"
            height={200}
            width={200}
            alt="Project"
            className=" rounded-3xl"
          />
        <h1 className="text-xl md:text-3xl ">Todo web application</h1>
        </a>
        <a
          href="https://voice-ai-green.vercel.app/"
          target="main" className="mt-3"
        >
          <Image
            src="/project3.png"
            height={200}
            width={200}
            alt="Project"
            className=" rounded-3xl"
          />
          <h1 className="text-xl md:text-3xl">Virtual voice assistance </h1>
        </a>
        </div>
        </div>
    

  )
}