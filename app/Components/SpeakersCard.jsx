import Image from "next/image";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineMessage } from "react-icons/ai";

const SpeakersCard = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center">
        <Image src={item?.image} width={150} height={150}></Image>
      </div>
      <h2 className="text-xl font-semibold mt-4">{item?.name}</h2>
      <p className="text-gray-500 text-sm">{item?.role}</p>

      <button className="mt-3 bg-primary-400  text-white px-4 py-2 rounded-full text-sm">
        Speakers
      </button>

      <div className="mt-4 text-gray-500 text-xs">
        Speaking at <br />"{item?.topic}"
      </div>

      <div className="flex items-center font-medium text-primary-400 justify-center gap-5 mt-4 border-t pt-4">
        <div className="flex flex-col items-center ">
          <FaRegBookmark className="text-xl font-bold"></FaRegBookmark>
          <p className="text-xs  mt-1">Bookmark</p>
        </div>
        <div className="flex flex-col items-center ">
          <GoPerson className="text-xl font-bold"></GoPerson>
          <p className="text-xs  mt-1">View Profile</p>
        </div>
        <div className="flex flex-col items-center ">
          <AiOutlineMessage className="font-bold text-xl"></AiOutlineMessage>
          <p className="text-xs  mt-1">Say Hi</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakersCard;
