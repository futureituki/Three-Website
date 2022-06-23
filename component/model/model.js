import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber';

function Scene({path,scale=[0,0,0],position=[0,0,0]}) {
  const glb = useLoader(GLTFLoader, path)
  return (
      <primitive object={glb.scene} scale={scale}  position={position} />
  )
}

export default Scene