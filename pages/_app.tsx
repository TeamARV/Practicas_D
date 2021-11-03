
import type { AppProps } from 'next/app'
import { useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {

  var algo= "bootstrap/dist/js/bootstrap.js"

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
}, []);
  return <Component {...pageProps} />
}

export default MyApp
