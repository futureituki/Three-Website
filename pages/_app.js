import '../styles/global.css'
import { Canvas, ambientLight, spotLight } from "@react-three/fiber"
// import '../styles/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <ambientLight intensity={1}/>
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Component {...pageProps} />
      </Canvas>
    </ChakraProvider>
    </>
  )
}

export default MyApp
