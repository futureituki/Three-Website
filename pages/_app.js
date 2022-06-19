
import { Canvas } from "@react-three/fiber"
import NavBar from "../component/navbar"
import Header from "../component/navbar/nav"
// import '../styles/styles.css'
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <NavBar router={router}/> */}
      <Header/>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Component {...pageProps} />
      </Canvas>
    </>
  )
}

export default MyApp
