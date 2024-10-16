"use client"
import Image from "next/image";
import SpeakersCard from "./Components/SpeakersCard";
import { speakerData } from "@/Public/Data/SpeakerData";
import Pagination from "./Components/Pagination";
import PageHeaders from "./Components/PageHeaders";

export default function Home() {



  return (
    <div className="p-5 max-w-[1000px] m-auto min-h-screen bg-[#f4f5fe]">
      <PageHeaders headingTitleText="Agenda - Full Agenda"></PageHeaders>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       { speakerData?.map(item => <SpeakersCard item ={item}></SpeakersCard> )}
      </div>

      <div className="mt-20">
        <Pagination></Pagination>
      </div>
    </div>
  );
}
