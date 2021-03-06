import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const useRotate = (speed = [1, 1, 1]) => {
    const ref = useRef(null)
    useFrame(({ clock }) => {
          const a = clock.getElapsedTime()
          if(ref.current){
              ref.current.rotation.x = a * speed[0]
              ref.current.rotation.y = a * speed[1]
              ref.current.rotation.z = a * speed[2]
          }
      })
    return ref
}