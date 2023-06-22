import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import Card from './Card';

const Illustration = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
       <Card />
       </Stage>
       <OrbitControls enableZoom={false} />
      </Canvas>
  );
};

export default Illustration;