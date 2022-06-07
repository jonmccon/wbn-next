import * as THREE from "three";
import React from "react";
import utilStyles from "../../styles/utils.module.css";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Face() {
let gltf = useLoader(GLTFLoader, '/models/Face6.glb')

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 0, 1).setLength(6);
let renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x404040);
document.body.appendChild(renderer.domElement);

// window.addEventListener("resize", onWindowResize);

let pointer = new THREE.Vector3();
let lookAt = new THREE.Vector3();
window.addEventListener("pointermove", event => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
  lookAt.copy(pointer).unproject(camera).setLength(5);
  o.lookAt(lookAt);
})


// let g = new THREE.ConeGeometry(0.2, 2, 32);
// g.translate(0, 1, 0);
// g.rotateX(Math.PI * 0.5);
// let m = new THREE.MeshNormalMaterial();
// let o = new THREE.Mesh(g, m);
// scene.add(o);
// console.log(g)

// renderer.setAnimationLoop(() => {
//   renderer.render(scene, camera);
// });

// function onWindowResize() {

//   camera.aspect = innerWidth / innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(innerWidth, innerHeight);

// }


    return (
    //   <Suspense fallback={null}>
        <primitive object={gltf.scene} />
    //   </Suspense>
    )
  }

export default Face;