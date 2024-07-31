import React from 'react'
import Lottie from "react-lottie";
import * as location from "../assets/1055-world-locations.json";


const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

const Loading = () => {
  return (
    <>
    <div className='bg-[rgb(88,86,86)] min-h-screen flex justify-center items-center '>
      <Lottie options={defaultOptions1} height={200} width={200} />
    </div>
    </>
  )
}

export default Loading