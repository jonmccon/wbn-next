import React from "react";
import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Box(props) {
    const loader = new GLTFLoader();

    loader.load( 'path/to/model.glb', function ( gltf ) {
    
        scene.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );
export default Box;