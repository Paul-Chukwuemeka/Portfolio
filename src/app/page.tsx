import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Main from "./Components/main";
import ParticlesComponent from "./Components/particle";


const Page = () => {
  return (
    <div className="min-h-screen h-full relative">
      <ParticlesComponent />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Page;
