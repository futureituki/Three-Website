import { Html, useProgress } from "@react-three/drei";
import { Spinner } from "@chakra-ui/react";
export default function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return (
    <Html center>
      <Spinner
        position="absolute"
        top="40%"
        color="white"
        left="20%"
        boxSize={50}
      />
    </Html>
  );
}
