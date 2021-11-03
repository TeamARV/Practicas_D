import type { NextPage } from 'next'
import Link from "next/link"




const Page1: NextPage = () => {
  return (
    <div>
      <Link href="/">
   <div className="bg-green-500 text-center cursor-pointer">esto es un texto usando tailwind y un link al index</div>
   </Link>

   <span className="bg-danger text-red-900"> test bootsrap  fondo y letra tailwind</span>


   <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
<img src="https://picsum.photos/200/300?random=1" alt="" />
    <a href="#" className="btn btn-primary">botón con bootsrap</a>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Button con tailwind
</button>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
   
    </div>
  )
}

export default Page1
