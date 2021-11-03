import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
   <div className="bg-green-500 text-center">esto es un texto usando tailwind</div>
    </div>
  )
}

export default Home
