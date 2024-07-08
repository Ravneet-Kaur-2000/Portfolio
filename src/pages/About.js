import { Canvas, useFrame } from '@react-three/fiber'
import { Computers, Instances } from '../Computers'
import { BakeShadows, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { easing } from 'maath'
import Experience from './Experience'
import Info from './Info'
import StarsCanvas from './StarsCanvas'



const About = () => {
    return (
      <div className='main-container'>
        <StarsCanvas/>
        <div className='content-about'>
        <Info/>
        <Experience/>
        </div>
        </div>
    );
  };
  




export default About;