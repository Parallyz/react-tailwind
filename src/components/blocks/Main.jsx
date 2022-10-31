import React from "react";

function Main() {
  return (
    <div className=" py-52 md:py-82 lg:py-176 xl:py-206 relative bg-skeletonGrey-90  rounded-b-xxl ">
      <div className="container mx-auto md:mx-0 text-center  md:text-left">
        <div className="mb-12  text-primaryColor font-sans">
          <h1 className="mb-16 xl:mb-56 text-xxl font-bold font-playfairDisplay md:text-5xl  text-4xl xl:text-6xl ">
            Exclusive Deals of Furniture Collection
          </h1>
          <h2 className="text-lg md:text-2xl">
            Explore different categories. Find the best deals.
          </h2>
        </div>

        <button className="btn btn__primary  block mx-auto ">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Main;
