/* eslint-disable @next/next/no-img-element */
import React from "react";

const Svg = () => {
  return (
    <span className="rounded-full bg-mainGreen w-5 h-5">
      <svg
        className="flex-shrink-0 w-5 h-3 text-white inline"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
  );
};

export default function Communities(): JSX.Element {
  return (
    <div className="lg:h-screen bg-backgroundGrey flex justify-center items-center py-12">
      <div className="flex flex-col lg:flex-row w-10/12">
        <div className="lg:w-6/12 space-y-8 flex flex-col h-full self-center justify-center md:mb-6">
          <h1 className="text-black text-2xl lg:text-4xl font-semibold ">
            Building up <span className="text-mainGreen">Leaders </span>
            <br className="hidden lg:block" /> that thrives on Innovation.
          </h1>
          <p className="font-thin leading-6 text-black">
            Project 774 aims to spark interest and curiosity{" "}
            <br className="hidden lg:block" />
            across all local governments of the Nigerian{" "}
            <br className="hidden lg:block" /> society thereby
          </p>
          <ul className="space-y-4 text-grayText">
            <li className="block font-thin leading-6">
              <Svg />{" "}
              <span className="ml-2 text-black">
                Increase adoption of the e-naira digital currency.
              </span>
            </li>
            <li className="block font-thin leading-6">
              <Svg />{" "}
              <span className="ml-2 text-black">
                Create employment opportunities for digital jobs.
              </span>
            </li>
            <li className="block font-thin leading-6">
              <Svg />{" "}
              <span className="ml-2 text-black">Increase Tech adoption .</span>
            </li>
          </ul>
        </div>
        <div className="w-6/12 max-md:w-11/12 m-auto max-md:mt-12 h-full">
          <img className="max-md:w-full mx-auto rounded-xl" src="i.png" alt="p" />
        </div>
      </div>
    </div>
  );
}
