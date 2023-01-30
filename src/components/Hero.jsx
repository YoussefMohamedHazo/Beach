import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className=" w-full h-screen">
      <video
        className=" w-full  object-cover h-full"
        autoPlay
        loop
        muted
        src={beachVid}
      ></video>
      <div className=" absolute bg-gray-900/30 top-0 left-0 w-full h-full">
        {" "}
      </div>
      <div className=" absolute top-0 left-0 flex flex-col w-full h-full text-center text-white justify-center">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form className=" flex  justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <input
            className=" bg-transparent outline-none w-[300px] sm:w-[400px]"
            type="text"
            placeholder="Search Destination"
          />

          <button>
            <AiOutlineSearch
              size={20}
              style={{ color: "#ffffff" }}
              className="icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
