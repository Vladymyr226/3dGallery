/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: noform (https://sketchfab.com/noform)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/tr-66-rhythm-arranger-b58a105480dc4785ad39a3155476f7ec
title: TR-66 Rhythm Arranger
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  // const group = useRef();
  const { nodes, materials } = useGLTF('/speaker/scene.gltf');
  return (
    // <div>cfvfvd</div>
    <group  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material_1} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.material} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/speaker/scene.gltf');