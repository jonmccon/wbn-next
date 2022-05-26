import { Canvas } from "@react-three/fiber";
import utilStyles from "../../styles/utils.module.css";
import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import { Suspense } from "react";

export default function ThreeCanvas() {
  return (
    <div className={utilStyles.scene}>
      <Canvas
        shadows={true}
        className={utilStyles.canvas}
        camera={{
          position: [-6, 6, 7],
        }}
      >
        <Floor/>
        
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        
        <Floor position={[0, -5, 0]} />
        <Draggable>
          <Suspense>
          <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}