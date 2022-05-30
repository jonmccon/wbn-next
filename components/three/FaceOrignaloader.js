import React from "react";
import utilStyles from "../../styles/utils.module.css";
import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


function Face() {
    const gltf = useLoader(GLTFLoader, '/models/FaceShader-260k.glb')
    return (
    //   <Suspense fallback={null}>
        <primitive object={gltf.scene} />
    //   </Suspense>
    )
  }

export default Face;