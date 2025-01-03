import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import ParticlesComponent from "./Components/particle";


const Page = () => {
  return (
    <div className="h-full relative pb-10">
      <ParticlesComponent />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;