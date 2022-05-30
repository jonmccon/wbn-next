/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"

export default function Face({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/faceShader.glb")
  const faceTexture = useTexture("/models/faceShader-texture.jpg")

  
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.FaceShader.geometry} 
        material={materials.Selfie_fullres}
      >         
        <meshPhysicalMaterial map={faceTexture} />
      </mesh>
    </group>
  )
}
// console.log(Face)

useGLTF.preload("/models/faceShader.glb")
useTexture.preload("/models/faceShader-texture.jpg")




// export default function Model(props) {
//   const { nodes } = useGLTF('models/FEshape.glb')
//   return (
//       <mesh material={nodes.pTorus1.material} geometry={nodes.pTorus1.geometry}> 
//            <meshStandardMaterial
//               attach="material"
//               color="white"
//               roughness={0.3}
//               metalness={1.0}
//          />
//       </mesh>
//   )
// }

// npx gltfjsx FaceShader.glb