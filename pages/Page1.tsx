import type { NextPage } from 'next'
import Link from "next/link"




const Page1: NextPage = () => {
  return (
    <div>
      <Link href="/">
   <div className="bg-green-500 text-center cursor-pointer">esto es un texto usando tailwind y un link al index</div>
   </Link>

   <span className="bg-danger text-blue-600"> test bootsrap  fondo y letra tailwind</span>
   
    </div>
  )
}

export default Page1
