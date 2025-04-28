import React from "react";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center bg-[#f7f6f6] min-h-screen px-3">
      <div className="flex flex-col justify-center items-center bg-white shadow-2xl border px-5 py-3 rounded-xl h-[20rem] w-[25rem] sm:px-12 sm:w-[35rem] sm:h-[25rem]">
        <h1 className="text-black text-center font-serif text-[1rem] sm:text-[2rem]">
          About Us
        </h1>

        <p className="text-black text-bold text-sm  font-extralight text-justify mt-3 sm:text-[1.1rem] sm:mt-6">
          Welcome to our platform! We are passionate developers and designers
          who love building user-friendly and creative digital experiences. Our
          mission is to provide smooth, modern, and responsive web and mobile
          solutions that make your life easier and more productive.
        </p>

        <p className="text-black text-bold mt-3 text-sm  font-extralight text-justify sm:text-[1.1rem] sm:mt-5">
          Whether you're a business looking to expand online or a student
          learning to code, our goal is to support and empower you with the
          right tools and technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
