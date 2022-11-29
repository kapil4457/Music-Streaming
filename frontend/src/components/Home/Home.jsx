import React from "react";
import { Suspense } from "react";
import { Model } from "../../models/Final";
import { Canvas } from "react-three-fiber";
import "./Home.css";
const Home = () => {
  return (
    <div className="main_home">
      <div className="first_div">
        <div className="left">
          <h1>
            Enjoy Unlimited ad-free music for<pre> Free</pre>
          </h1>
          <button>Start Listening</button>
        </div>
        <div className="right">
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[3, 2, 4]} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
