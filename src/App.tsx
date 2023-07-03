import React, { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Product from "./components/product";
function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Product />
      </Canvas>
    </div>
  );
}

export default App;
