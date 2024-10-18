import Image from "next/image";

export default async function notFound() {
    await new Promise((resolve) => {
      setTimeout(resolve,3000);
    })

  return (
    <div className="h-screen w-full bg-slate-900 flex flex-col p-8" >
      <Image src="/download2.png" alt="image" height={249} width={271} className=' md:absolute md:z-10 md:left-20 md:top-20'/>
        <Image src="/download1.png" alt="image" height={230} width={138} className=' md:absolute md:z-9 md:top-24 md:left-96' />
    </div>
  )
}
