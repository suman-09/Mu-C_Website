import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const home = () => {
  return (
    <>
        <Header />
        <div className="relative bg-gray w-full h-[1281px] overflow-hidden text-center text-[100px] text-white font-sarala">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px] flex flex-col items-end justify-end lg:flex">
        <img src="public/images/home_bg.png" alt="background image"/>
        </div>
          <div className="absolute top-[143px] left-[calc(50%_-_532px)] font-abril-fatface inline-block w-[1065px] h-[135px]">
              The Official Music Club
          </div>
          <div className="absolute top-[630px] left-[calc(50%_-_166px)] text-[60px] font-abril-fatface">
              OnStage
          </div>
          <b className="absolute top-[277px] left-[956px] text-[37px] inline-block font-amaranth w-[297px]">
              NIT DURGAPUR
          </b>
          <div className="absolute top-[732px] left-[278px] text-[25px] inline-block w-[700px]">
            Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text
            Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum.
          </div>
          <div className="absolute top-[853px] left-[580px] text-[15px]">
            To know more:
          </div>
          <button
          className="cursor-pointer [border:10px] p-0 bg-[transparent] absolute top-[884.76px] left-[659px] w-[122.49px] h-[44.86px]"
          autoFocus
          >
        <div className="absolute top-[3.24px] left-[28px] text-[30px] font-sarala text-white text-center">
          Visit
        </div>
      </button>
        </div>
        
        <Footer />
    </>
  )
}

export default home;