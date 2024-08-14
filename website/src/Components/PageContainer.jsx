import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageContainer({ children }) {
  return (
    <div className=" h-screen w-screen relative  overflow-y-scroll overflow-x-hidden bg-black text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageContainer;
