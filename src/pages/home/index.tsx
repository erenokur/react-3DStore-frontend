import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Stats, OrbitControls, Circle } from "@react-three/drei";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { useSuspense: false });
  const gltf = useLoader(GLTFLoader, "../../assets/models/shipyard.glb");

  // Set the layers property of the objects in Collection 1 to 1
  //gltf.scene.children[0].layers.set(1);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black-100">
      <Canvas camera={{ position: [8, 2, 6] }} shadows>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
        <primitive
          object={gltf.scene.children[0]}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle> */}
        <OrbitControls target={[0, 1, 0]} />
        {/* <axesHelper args={[5]} /> */}
        <Stats />
      </Canvas>
      <h1 className="text-4xl font-bold mb-8">{t("greeting")}</h1>
      <button
        className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => navigate("/login")}
      >
        {t("entranceButton")}
      </button>
    </div>
  );
};

export default Home;
