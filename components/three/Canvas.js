import { Canvas } from "@react-three/fiber";
import utilStyles from "../../styles/utils.module.css";
import { Suspense } from "react";

import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitControls";
import Draggable from "./Draggable";
import Face from "./FaceOrignaloader";


export default function ThreeCanvas() {  
  
  return (
    <div className={utilStyles.scene}>
      <Canvas
        shadows={true}
        className={utilStyles.canvas}
        camera={{
          fov: 60, 
          near: 1, 
          far: 20, position: [2, 0, 0] 
        }}
      >

        <ambientLight position={[10, 0, 0]} />
      
        

        {/* <Floor position={[0, -5, 0]} /> */}
        
          <Suspense>
            <Face 
            position={[0, 0, 0]} 
            // rotation={[0, 0, 0]}
            />
            
          </Suspense>
        
        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  );
}