import { Canvas } from "@react-three/fiber";
import utilStyles from "../../styles/utils.module.css";
import { Suspense } from "react";

import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import Face from "./Face";


export default function ThreeCanvas() {
  return (
    <div className={utilStyles.scene}>
      <Canvas
        shadows={true}
        className={utilStyles.canvas}
        camera={{
          position: [-2, 2, 3],
        }}
      >
        
        
        <LightBulb position={[-2, 2, 2]} />
        

        {/* <Floor position={[0, -5, 0]} /> */}
        
          <Suspense>
            <Face position={[0, 0, 0]} rotation={[1.5, -.25, .75]}/>
          </Suspense>
        
        <OrbitControls/>
      </Canvas>
    </div>
  );
}