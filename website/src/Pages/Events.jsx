import React from "react";
import PageContainer from "../Components/PageContainer";
import { EventsBg } from "../assets";
import { events } from "../utils/constant";

function Events() {
  return (
    <PageContainer>
      {/* <div className="absolute inset-0 w-full z-20 h-full bg-black/30"></div> */}

      <div className=" absolute flex flex-col gap-5 mt-16 items-center h-full w-full  z-30 text-7xl my-5 ">
        <div>
          <div className=" text-center   font-serif">Events</div>
          <div className=" text-center text-3xl mt-2">
            Music Club, NIT Durgapur
          </div>
        </div>
        <div className=" w-4/5 text-xl mt-7  flex flex-col justify-center  items-center  mx-auto"></div>
      </div>
      <div className=" relative flex justify-center w-full ">
        <div className=" top-72 w-3/5  absolute">
          {events.map((event, index) => (
            <div
              key={index}
              className={` my-5 flex justify-between px-4 items-center ${
                index % 2 === 0 ? " flex-row " : "  flex-row-reverse"
              }`}
            >
              <img
                src={event.imageUrl}
                className=" h-32 aspect-square rounded-xl "
                alt=""
              />
              <div className={` w-full md:w-3/4`}>
                <div className=" text-3xl">{event.title}</div>
                <div className=" text-lg w-3/4">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
        <img
          src={EventsBg}
          className=" h-full    w-full mx-auto"
          alt="homeBG"
        />
      </div>
    </PageContainer>
  );
}

export default Events;
