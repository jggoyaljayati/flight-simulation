import React, { useEffect, useState, useRef } from "react";
import { PerspectiveCamera, Environment } from "@react-three/drei";
import { EffectComposer, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Landscape } from "./Landscape";
import { SphereEnv } from "./SphereEnv";
import { Airplane, planePosition } from "./Airplane";
import { Targets } from "./Targets";
import { MotionBlur } from "./MotionBlur";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function App({ isAirplanVisible, isLandScapeVisible }) {
  const [collision, setCollision] = useState(false);

  const { scene } = useThree();
  const raycaster = new THREE.Raycaster();
  const lastPosition = useRef(planePosition.clone());
  useEffect(() => {
    const handleCollision = () => {
      // Position the raycaster
      raycaster.set(planePosition, new THREE.Vector3(0, -1, 0)); // Assuming negative y is downward
      const intersects = raycaster.intersectObject(scene.children[3], true); // True for recursive checking all descendants

      if (intersects.length > 0 && intersects[0].distance < 0.5) {
        // Check if the distance is less than 1 unit
        console.log("Collision detected!");
        const event = new KeyboardEvent("keydown", {
          key: "r",
          code: "KeyR",
          keyCode: 82,
          which: 82,
          altKey: false,
          ctrlKey: false,
          shiftKey: false,
          metaKey: false,
          bubbles: true,
        });

        // Dispatch the event to the window or any other target element
        window.dispatchEvent(event);
        setCollision(true);
      }
    };

    const checkCollision = () => {
      handleCollision();
      lastPosition.current.copy(planePosition);
    };

    // Add your preferred timing method, e.g., requestAnimationFrame
    const intervalId = setInterval(checkCollision, 100);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <SphereEnv />
      <Environment background={false} files={"assets/textures/envmap.hdr"} />

      <PerspectiveCamera makeDefault position={[0, 11, 10]} />

      <Landscape isVisible={isLandScapeVisible} />
      <Airplane isVisible={isAirplanVisible} />
      {/* <Targets /> */}

      <directionalLight
        castShadow
        color={"#f3d29a"}
        intensity={2}
        position={[10, 5, 4]}
        shadow-bias={-0.0005}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.01}
        shadow-camera-far={20}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-camera-left={-6.2}
        shadow-camera-right={6.4}
      />

      <EffectComposer>
        <MotionBlur />
        <HueSaturation
          blendFunction={BlendFunction.NORMAL} // blend mode
          hue={-0.15} // hue in radians
          saturation={0.1} // saturation in radians
        />
      </EffectComposer>
    </>
  );
}

export default App;
