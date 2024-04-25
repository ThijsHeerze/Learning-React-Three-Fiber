import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ambientLight } from "three/src/Three.js";

function Cube() {
  return (
    <Canvas>
      <CubeMesh />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}

function CubeMesh() {
  const meshRef = useRef();

  // Move useFrame inside the Canvas component
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial>
        <color args={["hotpink"]} attach="color"></color>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
