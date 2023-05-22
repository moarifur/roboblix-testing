import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const BusterDrone = ({ isMobile }) => {
    const buster_drone = useGLTF("./dji_drone.glb");

    return (
        <mesh>
            <hemisphereLight intensity={3} groundColor='black' />
            <spotLight
                position={[100, 100, 50]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={256}
            />
            <pointLight intensity={1} />
            <primitive
                object={buster_drone.scene}
                scale={isMobile ? 10 : 90}
                position={isMobile ? [0, -3, -2.2] : [10, -180, -10]}
                rotation={[-0.01, 0, 0]}
            />
        </mesh>
    );
};

const BusterDroneCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [150, 310, 100], fov: 60 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <BusterDrone isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default BusterDroneCanvas;