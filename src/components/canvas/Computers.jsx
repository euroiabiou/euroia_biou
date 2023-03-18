import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ( { isMobile }) => {
  const computer = useGLTF("./Bonsai/scene.gltf");

  return (
    <mesh >
      <hemisphereLight intensity={0.8} 
      groundColor='white' />
      <pointLight intensity={1} />
      <spotLight 
      position={[20, 30, 100]}
      angle={1}
      penumbra={1}
      intensity={2}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.50 : 0.7}
      position={isMobile ? [-1, -8, 0] : [-1, -8, 0]}
      rotation={[-0.01, 1, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
   
    useEffect(() => {
       // Event Listener that changes screen size
       const mediaQuery = window.matchMedia("(max-width: 500px)");

       // Set the initial value of 'isMobile' state variable
      setIsMobile(mediaQuery.matches);
      
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }

      // Add the callback function as a listener for the changes to the media query.
      mediaQuery.addEventListener('change', 
      handleMediaQueryChange);

      // Remove the listener when the component leaves mobile view
      return () => {
        mediaQuery.removeEventListener('change', 
        handleMediaQueryChange )
      }

      }, [])
    
   return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [80, 1, 20], fov: 22 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;