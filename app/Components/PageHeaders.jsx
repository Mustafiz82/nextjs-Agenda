import React from "react";

const PageHeaders = ({headingTitleText}) => {
  return (
    <div className="">
      <div className="flex bg-white rounded-md  items-center  justify-between p-6">
        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">
         {headingTitleText}
        </h1>
      </div>

      <div className="bg-white my-5  p-5 text-center rounded-md">
        <h1 className="text-lg md:text-xl 2xl:text-2xl font-medium ">
          Meet Our Speakers
        </h1>
        <p>241 speakers</p>
      </div>
    </div>
  );
};

export default PageHeaders;
