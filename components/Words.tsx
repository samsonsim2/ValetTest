/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { LoopPingPong, MeshStandardMaterial } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    ['21Years']: THREE.Mesh
    StaticWords: THREE.Mesh
    Words: THREE.SkinnedMesh
    TopBase_word: THREE.Bone
  }
  materials: {}
}

type ActionName = 'animation_0'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Words(props: JSX.IntrinsicElements['group']) {
  const [active, setActive] = useState(false)
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF(
    '/models/Words.glb'
  ) as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)

  const btn = document.querySelector('.btn')
  btn?.addEventListener('click', () => {
    setActive(!active)
  })

  useEffect(() => {
    actions.animation_0.play()
    actions.animation_0.setLoop(LoopPingPong, 2)
    actions.animation_0.reset()
  }, [active])
  return (
    <group ref={group} {...props} dispose={null} scale={[0.01, 0.01, 0.01]}>
      <group>
        <group name='Emboss' position={[21.75, 0, 11.58]}>
          <mesh
            name='21Years'
            castShadow
            receiveShadow
            geometry={nodes['21Years'].geometry}
            material={nodes['21Years'].material}
            position={[21.75, 0, 11.58]}
          >
            <meshStandardMaterial color={'#7cd3ab'} />
          </mesh>
          <mesh
            name='StaticWords'
            castShadow
            receiveShadow
            geometry={nodes.StaticWords.geometry}
            material={nodes.StaticWords.material}
            position={[-21.75, 0, -11.58]}
          >
            <meshStandardMaterial color={'#7cd3ab'} />
          </mesh>
          <skinnedMesh
            name='Words'
            geometry={nodes.Words.geometry}
            material={nodes.Words.material}
            skeleton={nodes.Words.skeleton}
            position={[-21.75, 0, -11.58]}
          >
            <primitive object={nodes.TopBase_word} />
            <meshStandardMaterial color={'#7cd3ab'} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Words.glb')
