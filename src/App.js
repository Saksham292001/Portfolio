import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const AnimatedModel = ({ url, scale }) => {
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  return <primitive object={scene} scale={scale} />; // Use passed scale
};

const App = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-blue-300">
      {/* Cover Image with Portfolio Title */}
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-end text-right pr-8"
           style={{ backgroundImage: "url('/images/futuristic-cover.jpeg')" }}>
        <h1 className="text-5xl font-semibold text-blue-300 bg-black bg-opacity-40 p-4 rounded-md">
          Saksham Singh's Portfolio
        </h1>
      </div>

      {/* About Section */}
      <div className="flex justify-between px-8 mb-10">
        <About className="w-2/3" /> {/* Left-aligned About section */}
        {/* Model1 on the right side of the About section */}
        <div className="flex justify-center items-center w-1/3 mt-10"> {/* Added mt-10 for downward positioning */}
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* Increased scale for Model1 */}
            <AnimatedModel url="/model1/scene.gltf" scale={[6.0, 6.0, 6.0]} /> 
            <OrbitControls enableZoom={true} enableRotate={true} enablePan={false} />
          </Canvas>
        </div>
      </div>

      {/* Skills Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 h-[500px] flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {/* Set scale for Model2 to [2.0, 2.0, 2.0] */}
            <AnimatedModel url="/model2/scene.gltf" scale={[1.8, 1.8, 1.8]} />
            <OrbitControls enableZoom={true} enableRotate={true} enablePan={false} />
          </Canvas>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <Skills />
        </div>
      </div>

      <Projects />
      <Footer />
    </div>
  );
};

export default App;
