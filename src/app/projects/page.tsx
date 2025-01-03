import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <div className="h-fit min-h-[80vh] text-white">
        <h1 className="text-5xl">Who am I</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
