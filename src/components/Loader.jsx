import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/blue loading.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-300">
      <Lottie 
        animationData={loaderAnimation} 
        loop={true} 
        style={{ width: 200, height: 200 }} 
      />
    </div>
  );
};

export default Loader;
