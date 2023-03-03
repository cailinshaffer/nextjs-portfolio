import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* navbar above */}
    <Navbar />
    <Component {...pageProps} />
    {/* footer below */}
    </>
  )
}
