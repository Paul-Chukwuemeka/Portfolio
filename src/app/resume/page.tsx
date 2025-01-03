"use client";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PdfComponent from "../Components/PdfComponent";

const Resume = () => {
  return (
    <div>
      <Header />6
      <main className="mt-16 flex flex-col justify-center items-center w-full">
        <a
          href="/Paul Chukwuemeka Resume.pdf"
          download="Paul Chukwuemeka Resume.pdf"
          className="bg-sky-500 px-6 text-xl p-2 text-white rounded-lg my-4"
        >
          Download CV
        </a>
        <div>
          {" "}
          <PdfComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
