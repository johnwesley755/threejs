import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Custom Model Component
const Model = () => {
  const { scene } = useGLTF("/models/hologram.glb"); // Ensure correct path
  const modelRef = useRef<THREE.Group>(null);

  // Rotation animation with smooth easing
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = clock.getElapsedTime() * 0.2; // Smooth rotation
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={window.innerWidth > 768 ? 4 : 2.5} // Responsive scaling
      position={[0, -1.5, 0]}
    />
  );
};

const Model3 = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-black">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 2, 5], fov: 50 }}
        shadows
      >
        <Suspense
          fallback={
            <Html center>
              <p className="text-white animate-pulse">Loading 3D Model...</p>
            </Html>
          }
        >
          {/* Hologram Lights */}
          <spotLight
            position={[0, 5, 5]}
            angle={0.6}
            intensity={2}
            color="#00ffff"
            castShadow
          />
          <pointLight position={[-2, 2, 3]} intensity={1.2} color="#ff00ff" />
          <ambientLight intensity={0.3} />

          {/* 3D Model */}
          <Model />

          {/* Camera Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model3;
