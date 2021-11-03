/* import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' */

import type { NextPage } from 'next'
import Link from "next/link"




const Home: NextPage = () => {
  return (
    <div>

   <Link href="/Page1">
  
     <p className="bg-blue-400 cursor-pointer text-center">esto es un link al index y usando tailwind</p>
      
   </Link>

   <Link href="/Page1">
  
  <p className="bg-success cursor-pointer text-center">esto es un link al index y usando tailwind y bootstrap</p>
   
</Link>

<span className="bg-danger text-blue-600"> test bootsrap  fondo y letra tailwind</span>
   

   <nav className="navbar navbar-expand-lg navbar-light  fixed-button ">
          
          <div className="container-fluid ">
        
            <a className="navbar-brand "  href="#seccion3"><i className="fas fa-user-secret"/>  Andrés Rivera Vega navbar con bootsrap </a>
            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNav">
              <ul className="navbar-nav " >
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#seccion3">
                  <i className="fas fa-laptop-code"/> Skills</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#seccion2"> <i className="fas fa-tasks"/> Proyectos</a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link " Link to='/seccion1'>Contactar<Link/></a> */}
                  <a className="nav-link" href="#seccion1" id='me'> <i className="far fa-address-card"/> Contactar</a>
        
              
                  {/* <Link  to="#seccion1" > pagina inicial </Link> */}
                </li>
                <li className="nav-item text-right">
                  <a className="nav-link disabled text-right"  href="#seccion3"  aria-disabled="true">Disabled 
                  <i className="fas fa-user-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   

  
    </div>
  )
}

export default Home
