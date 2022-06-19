// import { useMemo } from "react";
// import * as THREE from 'three';

// const planePositions = useMemo(() => {
//   const planeGeometry = new THREE.PlaneBufferGeometry(6, 6, 120, 120);
//   const positions = planeGeometry.attributes.position.array;

//   return positions;
// }, []);

// const Geometory = () => {
//   return (
//     <bufferGeometry attach="geometry">
//       <bufferAttribute 
//       attachObject={['attributes','position']}
//       array={planePositions}
//       item={3}
//       count={planePositions.length / 3}
//     />
//     </bufferGeometry>
//   )
// }

// export default Geometory