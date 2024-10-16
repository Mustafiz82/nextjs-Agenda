"use client"
import React from "react";
import PageHeaders from "../Components/PageHeaders";
import Amanda1Card from "../Components/Amanda1Card";
import { speakerData } from "@/Public/Data/SpeakerData";
import Pagination from "../Components/Pagination";

const page = () => {
  return (
    <div className="p-5 max-w-[1000px] m-auto min-h-screen bg-[#f4f5fe]">
      <PageHeaders headingTitleText=" Agenda - Speakers "></PageHeaders>

      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 ">
        {speakerData?.map((item) => (
          <Amanda1Card item={item}></Amanda1Card>
        ))}
      </div>

      <div className="mt-20">
        <Pagination></Pagination>
      </div>
    </div>
  );
};

export default page;
