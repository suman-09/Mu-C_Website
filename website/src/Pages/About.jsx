import React from "react";
import PageContainer from "../Components/PageContainer";
import { AboutBg } from "../assets";

function About() {
  return (
    <PageContainer>
      {/* <div className="absolute inset-0  w-full z-20 h-full bg-black/30"></div> */}

      <div className=" absolute flex flex-col gap-5 mt-16 items-center h-full w-full  z-30 text-7xl my-5 ">
        <div>
          <div className=" text-center   font-serif">About Us</div>
          <div className=" text-center text-3xl mt-2">
            Music Club, NIT Durgapur
          </div>
        </div>
        <div className=" w-4/5 text-xl mt-7  flex flex-col justify-center  items-center  mx-auto">
          <span className=" text-2xl my-2">
            Mu-C: PARADISE FOR MUSIC LOVERS.
          </span>{" "}
          <span className=" text-center mt-4">
            We are MU-C, the official music club of NIT DURGAPUR which brings
            everyone into the enchanting world of melody haven. We captivate
            hearts and souls of music lovers both from our lovely campus and
            outside of it through our social media platforms. From Knockin' On
            Heaven's Door to Kaise Hua we are a club with thriving musical
            diversity. Whether you are a fan or a musician seeking for some
            soulful or rocking concert MU-C is the right place for you.
          </span>
        </div>
      </div>
      <img src={AboutBg} className="   h-[100vh] w-full mx-auto" alt="homeBG" />
    </PageContainer>
  );
}

export default About;
