/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { BackSide, LoopPingPong } from 'three'

type ActionName = 'animation_0'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    RightFlap: THREE.Mesh
    LeftFlap: THREE.Mesh
    BoxBase: THREE.Mesh
    TopFlap: THREE.SkinnedMesh
    TopBase: THREE.Bone
  }
  materials: {}
  animations: GLTFAction[]
}

export function BoxBase(props: JSX.IntrinsicElements['group']) {
  const diffuseMap = useTexture('./textures/Box_Base_UV.jpg')
  const normalMap = useTexture('./textures/Box_Normal_UV.jpg')
  diffuseMap.flipY = false

  const [active, setActive] = useState(false)

  const group =
    React.useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>
  const { nodes, materials, animations } = useGLTF(
    '/models/Boxbase.glb'
  ) as GLTFResult

  const { actions } = useAnimations(animations, group)

  const btn = document.querySelector('.btn')
  btn?.addEventListener('click', () => {
    setActive(!active)
  })

  useEffect(() => {
    actions?.animation_0?.play()
    actions?.animation_0?.setLoop(LoopPingPong, 2)
    actions?.animation_0?.reset()
  }, [active])

  const normalScale = new THREE.Vector2(0.35, 0.35)

  return (
    <group ref={group} {...props} dispose={null} scale={[0.01, 0.01, 0.01]}>
      <group>
        <group name='Boxbase'>
          <mesh
            name='RightFlap'
            castShadow
            receiveShadow
            geometry={nodes.RightFlap.geometry}
            material={nodes.RightFlap.material}
            position={[-43.44, 0, 22.62]}
          >
            <meshStandardMaterial
              map={diffuseMap}
              normalMap={normalMap}
              normalScale={normalScale}
            />
          </mesh>
          <mesh
            name='LeftFlap'
            castShadow
            receiveShadow
            geometry={nodes.LeftFlap.geometry}
            material={nodes.LeftFlap.material}
            position={[43.52, 0, 23.17]}
          >
            <meshStandardMaterial
              map={diffuseMap}
              normalMap={normalMap}
              normalScale={normalScale}
            />
          </mesh>
          <mesh
            name='BoxBase'
            castShadow
            receiveShadow
            geometry={nodes.BoxBase.geometry}
            material={nodes.BoxBase.material}
          >
            <meshStandardMaterial
              map={diffuseMap}
              normalMap={normalMap}
              normalScale={normalScale}
            />
          </mesh>
          <mesh
            name='BoxBase'
            castShadow
            receiveShadow
            geometry={nodes.BoxBase.geometry}
            material={nodes.BoxBase.material}
          >
            <meshStandardMaterial
              side={BackSide}
              color={'grey'}
              normalMap={normalMap}
              normalScale={normalScale}
            />
          </mesh>
          <skinnedMesh
            name='TopFlap'
            geometry={nodes.TopFlap.geometry}
            material={nodes.TopFlap.material}
            skeleton={nodes.TopFlap.skeleton}
          >
            <primitive object={nodes.TopBase} />
            <meshStandardMaterial
              map={diffuseMap}
              normalMap={normalMap}
              normalScale={normalScale}
            />
          </skinnedMesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Boxbase.glb')
