import Image from "next/image";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";
const Amanda1Card = ({item}) => {

    
  return (
    <div>
      <div className="bg-white  flex gap-5 shadow-lg rounded-lg p-3 ">
        <div className="flex lg:flex-1 justify-start">
          <Image src={item?.image} className=" lg:max-w-full h-auto" width={150} height={150}></Image>
        </div>
       <div className="mr-10" >
       <h2 className="text-xl font-semibold mt-4">{item?.name}</h2>
        <p className="text-gray-500 text-sm">{item?.role}</p>

        <button className="mt-1 bg-primary-400  text-white px-2  rounded-full text-sm">
          Speakers
        </button>

        <div className="mt-2 text-gray-500 text-xs">
          Speaking at <br />"{item?.topic}"
        </div>

        <div className="flex flex-1 items-end justify-end font-medium text-primary-400  gap-5 mt-4 border-t pt-4">
          <div className="flex flex-col items-center ">
            <FaRegBookmark className="text-base font-bold"></FaRegBookmark>
            <p className="text-xs  mt-1">Bookmark</p>
          </div>
          <div className="flex flex-col items-center ">
            <GoPerson className="text-base font-bold"></GoPerson>
            <p className="text-xs  mt-1">View Profile</p>
          </div>
          <div className="flex flex-col items-center ">
            <AiOutlineMessage className="font-bold text-base"></AiOutlineMessage>
            <p className="text-xs  mt-1">Say Hi</p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Amanda1Card;
