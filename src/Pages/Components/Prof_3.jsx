import React from "react";
import Prof from '../Assets/Hussain-removebg-preview.png'

function Prof_3() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <svg
        width="200"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <circle cx="100" cy="200" r="90" fill="rgb(37,36,36)" />
        <defs>
          <clipPath id="circle-clip">
            <ellipse cx="100" cy="165" rx="102" ry="126"></ellipse>
          </clipPath>
        </defs>
        <image
          href={Prof}
          width="200"
          height="250"
          x="0"
          y="50"
          clipPath="url(#circle-clip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}

export default Prof_3;
