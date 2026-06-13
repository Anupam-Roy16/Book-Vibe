// import React from 'react';
import heroimage from "../../assets/hero_img.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] my-8 rounded-2xl">
      <div className="flex items-center justify-between w-[90%] max-[1215px]:flex-col max-[1215px]:flex-col-reverse max-[1215px]:gap-9">
        <div className="max-[1215px]:text-center">
          <h1 className="text-5xl font-bold">
            Books to freshen up <br /> your Bookshelfs
          </h1>
          <button className="btn btn-success mt-4">View The List</button>
        </div>
        <div>
          <img src={heroimage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
