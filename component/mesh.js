import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const Mesh = ({color}) => {
  const ref = useRef();
  useFrame(({clock})=>{
    if(ref.current){
      ref.current.position.x += 0.1;
     if(ref.current.position.x > window.innerWidth){
      ref.current.position.x -= 0.1;
     }
    }
  })
  return (
    <>
    <pointLight position={[10, 10, 10]} />
    <mesh ref={ref}>
      <sphereBufferGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
    </>
  )
}

export default Mesh;