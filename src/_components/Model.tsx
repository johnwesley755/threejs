import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

const Model = () => {
  const modelRef = useRef<Mesh>(null);
  const { scene } = useGLTF("/models/model.glb");
  const { viewport } = useThree(); // Get viewport size


  const isMobileOrTablet = viewport.width < 1024;
  const scale = isMobileOrTablet ? 0.4 : 0.7; // Smaller on mobile/tablet
  const position = isMobileOrTablet ? [0, -0.5, 0] : [0, -1, 0]; // Adjusted lower on mobile

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Smooth rotation
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale} // Responsive scaling
      position={position} // Responsive positioning
    />
  );
};

export default Model;
