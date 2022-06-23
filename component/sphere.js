import React, { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { softShadows } from "@react-three/drei"

// Inject soft shadow shader
softShadows()

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)
function Sphere({ position = [0, 0, 0], ...props }) {
  const ref = useRef()
  const factor = useMemo(() => 0.8 + Math.random(), [])
  useFrame((state) => {
    const t = easeInOutCubic((1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2)
    ref.current.position.y = position[1] + t - 0.8
    ref.current.scale.y = 1 + t * 2
  })
  return (
    <mesh ref={ref} position={position} {...props} castShadow receiveShadow>
      <sphereBufferGeometry attach="geometry" args={[0.5, 0.5, 2]} />
      <meshStandardMaterial attach="material" color="black" roughness={1} metalness={0.1} />
    </mesh>
  )
}

function Spheres({ number = 20 }) {
  const ref = useRef()
  const positions = useMemo(() => [...new Array(number)].map(() => [3 - Math.random() * 12, Math.random() * 4, 3 - Math.random() * 4]), [])
  useFrame((state) => (ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI))
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Sphere key={index} position={pos} />
      ))}
    </group>
  )
}

export default Spheres