import "./App.css";
import { HomeBg } from "./assets";
import Button from "./Components/Button";
import PageContainer from "./Components/PageContainer";
import { FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <PageContainer>
      <div className=" relative  w-full">
        <div className="absolute inset-0 w-full z-20 h-full bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
        <div className=" absolute z-30 text-7xl w-4/5 my-5 ">
          <div className=" text-right   font-serif">
            The Official Music Club
          </div>
          <div className=" text-right text-3xl mt-2">NIT DURGAPUR</div>
        </div>
        <img
          src={HomeBg}
          className="   h-[90vh] w-[85%] mx-auto"
          alt="homeBG"
        />
        <div className=" absolute bottom-10 z-30 text-7xl w-full my-5 ">
          <div className=" text-center   font-serif">OnStage</div>
          <div className=" text-center text-xl mt-2">
            Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum{" "}
            <br /> Text Lorem Ipsum Text Lorem Ipsum Text Lorem Ipsum.
          </div>
          <div className=" text-base flex justify-center w-full items-center flex-col mt-5">
           <span className=" mb-2"> To Know More</span>
            <Button>
              Visit <FaArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default App;
