import Image from "next/image";


 export default function ProjectPage() {

  return (
    
    <div className="w-full bg-gradient-to-r from-blue-700 via-yellow-500 to-red-600 text-white  ">

      <h1 >Here is my some projects</h1>

      <div className="container flex flex-col justify-between p-2 ">

      <h1>Dyamic resume builder in this web application you can edit your own resume</h1>
      <a
          href="https://dynamic-resume-builder-project.vercel.app/"
          target="main" className="mb-3"
        >
          <Image
            src="/download.png"
            width={200}
            height={200}
            alt="Project"
            className="rounded-3xl"
          />
        </a>
        <h1>Todo web application</h1>

        <a
          href="https://owaiskhan-todo-typescript-project.vercel.app"
          target="main" className="mb-3"
        >
          <Image
            src="/project.png"
            height={200}
            width={200}
            alt="Project"
            className=" rounded-3xl"
          />
        </a>

        <h1>Virtual voice assistance </h1>
        <a
          href="https://voice-ai-green.vercel.app/"
          target="main" className="mb-3"
        >
          <Image
            src="/project3.png"
            height={200}
            width={200}
            alt="Project"
            className=" rounded-3xl"
          />
        </a>
        </div>
        </div>
    

  )
}