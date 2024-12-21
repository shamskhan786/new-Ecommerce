import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full h-full md:h-[500px] bg-[#F2F0F1] flex flex-col md:flex-row justify-between items-start mt-3 ">
      {/* left */}
      <div className="w-[300px] md:w-[700px] mt-3 ml-3 md:mt-10 md:ml-10">
        <h1 className="text-2xl md:text-6xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-sm mt-3">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black text-white py-2 px-24 rounded-3xl mt-5 md:px-10">Shop Now</button>
      </div>
      {/* Right */}
      <div className="relative md:mr-[50px]">
        <Image src="/Image/hero-image-01.png" alt="hero-image" width="900" height="500" className="w-[400px] h-[400px] m md:w-[1000px] md:h-[500px] md:mr-16"/>
        {/* star image */}
        <Image src="/Image/star.png" alt="hero-image" width="100" height="100" className="absolute w-[50px] md:w-[100px] ml-[250px] md:ml-5 md:right-8 top-10 "/>
        <Image src="/Image/star.png" alt="hero-image" width="70" height="70" className="absolute w-[30px] md:w-[70px] top-[100px] md:top-[250px] right-[300px] md:right-[500px]"/>
      </div>
    </div>
  );
}

export default Hero;
