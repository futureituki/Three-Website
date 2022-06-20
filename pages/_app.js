import '../styles/global.css'
import { Canvas } from "@react-three/fiber"
// import '../styles/styles.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Component {...pageProps} />
      </Canvas>
    </>
  )
}

export default MyApp
