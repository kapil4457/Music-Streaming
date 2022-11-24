import React from "react";
import "./Slider.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Slider = () => {
  return (
    <div className="main_slider_outer_div">
      <div className="main_slider_container">
        <ChevronLeftIcon className="leftArrow arrow" />
        <ChevronRightIcon className="rightArrow arrow" />
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
  );
};

export default Slider;
