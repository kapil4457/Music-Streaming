import React from "react";
import { Suspense } from "react";
import { Model } from "../../models/Final";
import { Canvas } from "react-three-fiber";
import "./Home.css";
import Slider from "./Slider";
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
      <div className="second_div">
        <div className="trending side_scroll">
          <h2>Trending</h2>
          <Slider />
        </div>
        <div className="new_releases side_scroll">
          <h2>New Releases</h2>
          <Slider />
        </div>
        <div className="top_charts side_scroll">
          <h2>Top Charts</h2>
          <Slider />
        </div>
        <div className="popular_in_hindi side_scroll">
          <h2>Popular in Hindi</h2>
          <Slider />
        </div>
        <div className="romance side_scroll">
          <h2>Romance</h2>
          <Slider />
        </div>
        <div className="featured_artist side_scroll">
          <h2>Featured Artist</h2>
          <Slider />
        </div>
        <div className="popular_in_punjabi side_scroll">
          <h2>Popular in Punjabi</h2>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
