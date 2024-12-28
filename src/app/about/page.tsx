import React from "react";
import Image from "next/image";
import Cartoon from "../assets/about-cartoon.png";
import Header from "../Components/header";
import Footer from "../Components/footer";

const page = () => {
  return (
    <div>
      <Header />
      <main className="h-fit min-h-[80vh] text-white pt-24 px-20 ">
        <div className=" max-md:flex-col max-md:bg-red-400 max-md:justify-center max-md:items-center lg:flex gap-4 justify-around items-center">
          <div className="flex flex-col gap-4 items-center text-xl font-normal">
            <h1 className="text-3xl font-extrabold">
              Who am{" "}
              <span className="text-sky-600">
                {" "}
                I
              </span>{" "}
              ?
            </h1>
            <p>
              Hi Everyone, I am{" "}
              <span className="text-sky-600">
                Paul Chukwuemeka
              </span>{" "}
              from{" "}
              <span className="text-sky-600">
                Lagos, Nigeria.
              </span>
            </p>
            <p>
              I am currently pursuing a degree in
              computer science at the University
              of The People.
            </p>

            <p>
              Apart from coding, some other
              activities that I love to do!
            </p>

            <ul className="gap-4 self-start">
              <li>Playing Games</li>
              <li>Listening to Music</li>

              <li>Reading Books</li>
            </ul>
          </div>
          <Image
            src={Cartoon}
            width={400}
            alt=""
            className=" border-4 border-sky-600"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
