import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"




const Page1: NextPage = () => {
  return (
    <div>
      <Link href="/">
   <div className="bg-green-500 text-center cursor-pointer">esto es un texto usando tailwind y un link al index</div>
   </Link>
   
    </div>
  )
}

export default Page1
