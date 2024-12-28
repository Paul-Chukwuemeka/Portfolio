import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
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
