import React from "react";
// import "../../styles/loader.css";

function Loader({background}) {
  // console.log(background  , "<<<<background");
  return (
    <div id="custom-loader" style={background =="transparent" ? {top:"0" ,left:"0"}: {top:"0" ,left:"0"}}>
      <div className="inner">
        <svg viewBox="0 0 38 38" width="40" height="40" stroke="#e30613">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".25" cx="18" cy="18" r="18"></circle>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s"
                  repeatCount="indefinite"></animateTransform>
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Loader;
