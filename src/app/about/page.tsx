import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

const page = () => {
  return (
    <div>
      <Header />
      <main className="h-fit min-h-[80vh] text-white pt-24 ">
        <div className="">
          <div>
            <h1 className="text-3xl font-extrabold">
              Who am{" "}
              <span className="text-sky-600">
                {" "}
                I
              </span>{" "}
              ?
            </h1>
            <p></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
