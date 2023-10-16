//components
import Layout from "../components/Layout";
import  Transition  from "../components/Transition";

//framer motion
import {AnimatePresence,motion} from "framer-motion"

//global styles
import "../styles/globals.css";

//use Router
import {useRouter} from 'next/router'
function MyApp({ Component, pageProps }) {
  const router=useRouter();
  return(
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  </Layout>
  )
}

export default MyApp;
