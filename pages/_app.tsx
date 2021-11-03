
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import { useEffect } from "react";





function MyApp({ Component, pageProps }: AppProps) {

  var algo= "bootstrap/dist/js/bootstrap.js"

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
}, []);
  return <Component {...pageProps} />
}

export default MyApp
