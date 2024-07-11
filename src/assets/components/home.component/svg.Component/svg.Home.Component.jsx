import React from "react";
import "../home.Component.css";
const Svg = () => {
  return (
    <>
      <div className="flex justify-end">
        <svg height="280" width="265">
          {/* Define the clipping path */}
          <defs>
            <clipPath id="polygon-clip">
              <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" />
            </clipPath>
          </defs>
          {/* Place the image inside the clipping path */}
          <image
            className="svg-image "
            href={"public/profile-pic/photo_9_2024-07-12_00-28-55.jpg"}
            x="0"
            y="0"
            width="330"
            height="450"
            clipPath="url(#polygon-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Optional: Outline the polygon */}
          <polygon
            points="150,15 258,77 258,202 150,265 42,202 42,77"
            className="fill-none stroke-purple-400 stroke-[4px] "
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    </>
  );
};

export default Svg;
