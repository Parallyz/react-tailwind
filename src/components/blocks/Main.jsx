import React from "react";

function Main() {
  return (
    <div className=" py-52 md:py-82 xl:py- relative bg-skeletonGrey-90  rounded-b-xxl ">
      <div className="container">
        <div className="mb-12 ">
          <h1 className="text-left xl:text-center title title__main xl:mb-12.5">
            Exclusive Deals of Furniture Collection
          </h1>
          <h2>Explore different categories. Find the best deals.</h2>
        </div>

        <button className="btn btn__primary xl:mx-auto block ">
          {" "}
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Main;
