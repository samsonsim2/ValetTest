import type { NextPage } from 'next'
import Head from 'next/head'

import * as THREE from 'three'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { OrbitControls, useAnimations, useTexture } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import { useEffect, useState } from 'react'
import { BoxBase } from '../components/BoxBase'
import { Words } from '../components/Words'
const Home: NextPage = () => {
  return (
    <div className='container'>
      <button className='btn'>Play</button>
      <Canvas gl={{ antialias: true, toneMapping: THREE.NoToneMapping }} linear>
        <color attach='background' args={['#dff7ff']} />

        <BoxBase />
        <Words />
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 1, 1]} intensity={0.7} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Home
