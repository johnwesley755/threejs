import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

const Model2 = () => {
  const modelRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/About.glb"); // Correct path

  // Smooth Rotation Effect
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0025; // Slower, smoother rotation
    }
  });

  return (
    <group
      ref={modelRef}
      scale={[0.3, 0.3, 0.3]}
      position={[-1, -1.2, 0]}
      castShadow
    >
      <primitive object={scene} />
    </group>
  );
};

// Preload the model
useGLTF.preload("/models/About.glb");

const Model2Canvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [2.5, 1.2, 5], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 3, 4]} intensity={1.2} castShadow />

      {/* Environment for better realism */}
      <Environment preset="city" />

      {/* 3D Model */}
      <Model2 />

      {/* Shadows */}
      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={4}
        blur={2}
        far={3}
      />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Model2Canvas;
