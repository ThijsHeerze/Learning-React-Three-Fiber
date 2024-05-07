import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ambientLight } from "three/src/Three.js";

function Cube() {
  return (
    <Canvas>
      <CubeMesh />
      <ambientLight />
      <pointLight position={[-1, 0, 0]} />
    </Canvas>
  );
}

function CubeMesh(position, size, color) {
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
    <mesh position={position} ref={meshRef}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Cube;
