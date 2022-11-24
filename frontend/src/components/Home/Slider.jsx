import React, { useState } from "react";
import "./Slider.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Slider = () => {
  const [transf, setTrans] = useState(0);
  const moveLeft = () => {
    var tempTrans = transf - 20;
    if (tempTrans >= -25) {
      setTrans(tempTrans);
    } else {
      setTrans(-25);
    }
  };
  const moveRight = () => {
    var tempTrans = transf + 20;
    if (transf < 0) {
      setTrans(tempTrans);
    } else {
      setTrans(0);
    }
  };
  return (
    <div className="main_slider_outer_div">
      <div className="main_slider_container">
        <ChevronLeftIcon className="leftArrow arrow" onClick={moveRight} />
        <ChevronRightIcon className="rightArrow arrow" onClick={moveLeft} />
        <div
          className="slide"
          style={{ transform: `translateX(${transf}rem)` }}
        >
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
          <img
            src="https://dw0i2gv3d32l1.cloudfront.net/uploads/stage/stage_image/21198/optimized_large_thumb_stage.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
