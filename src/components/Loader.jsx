import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/blue loading.json";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
        <DotLottieReact
      src="https://lottie.host/91aa15f8-5011-4c1d-b78c-b99ba8293e52/BH3dWwTLDa.lottie"
      loop
      autoplay
    />
    </div>
  );
};

export default Loader;
