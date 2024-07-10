import React from "react";

const Svg = () => {
  return (
    <>
      <div className="flex justify-end">
        <svg height="280" width="265" xmlns="http://www.w3.org/2000/svg">
          {/* Define the clipping path */}
          <defs>
            <clipPath id="polygon-clip">
              <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" />
            </clipPath>
          </defs>
          {/* Place the image inside the clipping path */}
          <image
            href={
              "https://framerusercontent.com/images/bqMdRSEHXHl2aDvkNTFsNRCct8.png"
            }
            x="0"
            y="0"
            width="265"
            height="280"
            clipPath="url(#polygon-clip)"
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Optional: Outline the polygon */}
          <polygon
            points="150,15 258,77 258,202 150,265 42,202 42,77"
            className="fill-none stroke-red-600 stroke-2"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </div>
    </>
  );
};

export default Svg;
