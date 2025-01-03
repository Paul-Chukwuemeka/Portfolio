"use client";
import React from "react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const PdfComponent = () => {
  const [numPages, setNumPages] =
    useState<number>();
  const [pageNumber, setPageNumber] =
    useState<number>(1);
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  function onDocumentLoadSuccess({
    numPages,
  }: {
    numPages: number;
  }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const nextPage = () => {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (numPages && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <div className=" ">
      <Document
        file="/Paul Chukwuemeka Resume.pdf"
        loading={
          <ClimbingBoxLoader
            cssOverride={{
              margin: "auto",
            }}
            color="#0284c7"
          />
        }
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          width={400}
        />
      </Document>
      <div className="flex justify-between items-center p-2 mb-6">
        <button
          className="bg-sky-500 px-2 text-xl p-2 text-white rounded-lg"
          onClick={prevPage}
        >
          Previous
        </button>
        <p className="text-xl text-white">
          Page {pageNumber} of {numPages}
        </p>
        <button
          className="bg-sky-500 px-6 text-xl p-2 text-white rounded-lg"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfComponent;
