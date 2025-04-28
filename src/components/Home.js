import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Career");
  };

  const handleAbout = () => {
    navigate("/About");
  };

  const handleContact = () => {
    navigate("/Contact");
  };

  const handlePrivacy = () => {
    navigate("/Privacy");
  };

  const handleReturnPolicy = () => {
    navigate("/Return Policy");
  };
  return (
    <div>
      <div className="px-8 ss:px-11 sss:px-10 ssss:px-[4rem] sm:px-[5rem] md:px-[9rem] lg:px-[12rem]">
        <nav className="flex justify-between items-center text-[0.500rem] sss:text-[0.650rem] sm:text-[0.750rem]">
          <div>
            <p className="font-bold text-[0.550rem] sss:text-[0.850rem] sm:text-[1rem]">
              Red Plants
            </p>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div>Home</div>
            <div>Cataloque</div>
            <div className="hover:cursor-pointer" onClick={handleContact}>
              Contact
            </div>
          </div>
          <div className="flex justify-around items-center gap-3">
            <div>Search</div>
            <div>Cart(0)</div>
          </div>
        </nav>

        <div className="flex justify-between h-[13rem] mt-10 sss:mt-12 xx:mt-[5rem] lg:mt-[10rem]">
          <div className="w-1/2 flex flex-col justify-center gap-3 xx:gap-4 lg:gap-5">
            <p className="text-[0.900rem] w-[10rem] sss:text-[1.2rem] sss:w-[12rem] xx:text-[1.4rem] xx:w-[15rem] md:text-[1.7rem] md:w-[17rem] lg:text-[2rem] lg:w-[19rem]">
              Finds perfect plants
              <br />
              for your home
            </p>
            <p className="text-[0.400rem] w-[7rem] sss:text-[0.400rem] sss:w-[7rem] xx:text-[0.500rem] xx:w-[9rem] md:text-[0.700rem] md:w-[11rem] lg:text-[0.750rem] lg:w-[13rem]">
              Beautiful plants that encourage you to get creative
            </p>
            <button className="text-[0.500rem] bg-black text-white w-[3.5rem] sss:text-[0.600rem] sss:w-[4.5rem] xx:text-[0.800rem] xx:w-[6rem] md:text-[0.850rem] md:w-[8rem] lg:py-2 lg:w-[7.5rem]">
              Shop Now
            </button>
          </div>

          <div className="w-1/2 flex justify-end items-center">
            <img
              className="w-[9rem] h-[12rem] shrink-0 sss:w-[10rem] sss:h-[13rem] xx:h-[16rem] xx:w-[10.9rem] lg:h-[25rem] lg:w-[20rem]"
              src="https://assets.api.uizard.io/api/cdn/stream/c8515796-8789-48b2-9884-dec4cd6778f4.jpg"
            />
          </div>
        </div>

        <div className="mt-[5rem] lg:mt-[13rem]">
          <div className="flex justify-around">
            <p className="text-[1rem] xx:text-[1.4rem] lg:text-[1.7rem]">
              Categeories
            </p>
          </div>

          <div className="flex justify-around gap-1 mt-10 xx:gap-2 sm:gap-3 md:gap-3.5 lg:gap-6">
            <div>
              <img
                src="https://blog.mytastefulspace.com/wp-content/uploads/2019/06/IMG_0673-768x1024.jpg"
                className="w-[] h-[]"
              />
              <span className="text-[0.400rem] xx:text-[0.700rem] lg:text-[1rem]">
                Jungle Plant
              </span>
            </div>

            <div>
              <img
                src="https://blog.mytastefulspace.com/wp-content/uploads/2019/06/IMG_0673-768x1024.jpg"
                className="w-[] h-[]"
              />
              <span className="text-[0.400rem] xx:text-[0.700rem] lg:text-[1rem]">
                Outdoor Plant
              </span>
            </div>

            <div>
              <img
                src="https://blog.mytastefulspace.com/wp-content/uploads/2019/06/IMG_0673-768x1024.jpg"
                className="w-[] h-[]"
              />
              <span className="text-[0.400rem] xx:text-[0.700rem] lg:text-[1rem]">
                Bedroom Plant
              </span>
            </div>

            <div>
              <img
                src="https://blog.mytastefulspace.com/wp-content/uploads/2019/06/IMG_0673-768x1024.jpg"
                className="w-[] h-[]"
              />
              <span className="text-[0.400rem] xx:text-[0.700rem] lg:text-[1rem]">
                Indoor Plant
              </span>
            </div>
          </div>

          <div className="lg:mt-[5rem]">
            <p className="text-center text-[0.750rem] mt-10 xx:text-[1rem] lg:text-[1.5rem]">
              Love and work are to people what water and <br />
              sunshine are to plants
            </p>
          </div>
        </div>

        <div className="flex justify-around gap-3 h-[8rem] mt-[4rem] xx:gap-5">
          <div className="flex items-center w-1/3 ss:w-[10rem lg:mt-4">
            <div className="flex flex-col xx:gap-1">
              <p className="text-[1.1rem] ss:text-[1.2rem] xx:text-[1.4rem] lg:text-[1.8rem]">
                Featured
              </p>
              <p className="text-[0.300rem] w-[5rem] ss:text-[0.500rem] ss:w-[7rem] xx:text-[0.650rem] xx:w-[8rem] lg:text-[0.700rem] lg:w-[9rem]">
                Our plants are 100% organic, <br />
                we don't use pesticides or harmful chemicals.
                <br /> <div className="mt-2">But please don't eat them</div>
              </p>
              <button className="text-[0.400rem] shadow p-1 mt-2 ss:text-[0.500rem] lg:text-[0.600rem]">
                Shop all Favourites
              </button>
            </div>
          </div>

          <div className=" w-full flex ">
            <div>
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/ab148d11-028d-4fe4-af04-8c2710fca1cd.jpg"
                className=""
              />
              <span className="text-gray-300 text-[0.650rem]">Plant 1</span>
              <br />
              <span className="text-[0.500rem] lg:text-[1rem]">150€</span>
            </div>

            <div className="">
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/2023b4f6-fdd2-4fdd-8a6f-0e9a43363020.jpg"
                className="w-[38rem]"
              />
              <span className="text-gray-300 text-[0.650rem]">Plant 2</span>
              <br />
              <span className="text-[0.500rem] lg:text-[1rem]">70€</span>
            </div>

            <div>
              <img
                src="https://assets.api.uizard.io/api/cdn/stream/ab148d11-028d-4fe4-af04-8c2710fca1cd.jpg"
                className=""
              />
              <span className="text-gray-300 text-[0.650rem]">Plant 3</span>
              <br />
              <span className="text-[0.500rem] lg:text-[1rem]">50€</span>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center mt-[4rem] gap-1 ss:mt-[6rem] ssss:mt-[7rem] xx:mt-[8.7rem] sm:mt-[10rem] md:mt-[14rem] lg:mt-[20rem]">
          <div className="">
            <img
              src="https://assets.api.uizard.io/api/cdn/stream/3b5ffd6b-115b-4ac3-9e39-7e2875d27dd7.jpg"
              className="h-[6rem] w-[40rem] ss:h-[7rem] sss:h-[7.5rem] ssss:h-[8rem] xx:h-[9rem] sm:h-[10rem] md:h-[11rem] lg:w-[33rem] lg:h-[14rem]"
            />

            {/* <div className="bg-white p-1 h-[1.5rem] w-[4rem] relative bottom-[2rem] left-[5.6rem] flex-grow lg:h-[3rem] lg:w-[7rem] relative lg:bottom-[4rem] lg:left-[20.4rem]">
              <p className="text-[0.3400rem] text-gray-400">Written by</p>
              <p className="text-[0.400rem]">Mallissa Bill</p>
            </div> */}

            <span className="text-gray-400 text-[0.500rem]  lg:text-[0.500rem]">
              Edition 291
            </span>
            <br />
            <p className="text-[0.400rem] h-[3rem] ss:text-[0.450rem] sss:text-[0.550rem] ssss:text-[0.700rem] lg:text-[1rem]">
              How to water your freaking plants so they don't die after one week
            </p>
          </div>
          <div className="">
            <img
              src="https://gardenerspath.com/wp-content/uploads/2022/09/Hibiscus-Plant-Growing-Indoors-in-Winter-1024x683.jpg"
              className="h-[6rem] w-[40rem] ss:h-[7rem] sss:h-[7.5rem] ssss:h-[8rem] xx:h-[9rem] sm:h-[10rem] md:h-[11rem] lg:w-[33rem] lg:h-[14rem]"
            />

            {/* <div className="bg-white p-1 h-[1.5rem] w-[4rem] relative bottom-[2rem] left-[5.6rem] flex-grow lg:h-[3rem] lg:w-[7rem] relative lg:bottom-[4rem] lg:left-[20.4rem]">
              <p className="text-[0.3400rem] text-gray-400">Written by</p>
              <p className="text-[0.400rem]">Jessa Rowe</p>
            </div> */}

            <span className="text-gray-400 text-[0.500rem] lg:text-[0.500rem]">
              Edition 291
            </span>
            <br />
            <p className="text-[0.400rem] h-[3rem] ss:text-[0.450rem] sss:text-[0.550rem] ssss:text-[0.700rem] lg:text-[1rem]">
              How to repot a Monstera without so killing it and foster its
              growth
            </p>
          </div>
        </div>

        <div className="mt-[1rem] ss:mt-[2rem] xx:mt-[3rem] sm:mt-[5rem]">
          <p className="text-[0.550rem] text-center ss:text-[0.700rem] sss:text-[0.800rem] ssss:text-[0.850rem] sm:text-[0.900rem] md:text-[1rem] lg:text-[1.1rem]">
            Get 15% off your next order,
            <br /> Subscribe to our Newsletter
          </p>
          <div className="flex justify-center items-center mt-2 sm:mt-5">
            <input
              type="text"
              placeholder="Enter your email here"
              className="bg-gray-200 h-3.5 w-[8rem] pl-1.5 text-[0.300rem] ss:text-[0.400rem] ss:w-[10rem] ss:h-4 sss:text-[0.550rem] sss:w-[11rem] ssss:w-[13rem] ssss:h-6 ssss:text-[0.650rem] sm:w-[17rem] sm:h-7 sm:text-[0.950rem] xx:[rem] sm:[rem] md:[rem] lg:w-[20rem] lg:h-7 lg:text-[0.800rem]"
            />
            <button className="text-[0.400rem] bg-black text-white h-3.5 w-[2.5rem] ss:text-[0.450rem] ss:w-[3rem] ss:h-4  ssss:h-6 ssss:w-[4.2rem] ssss:text-[0.570rem] sm:h-7 sm:w-[5rem] sm:text-[0.650rem] lg:[rem] lg:h-7 lg:w-[5rem] lg:text-[0.700rem]">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="flex justify-between text-[0.450rem] mb-[1rem] mt-[3rem] sm:mt-[5rem] sm:text-[0.650rem] lg:text-[0.700rem]">
          <div className="font-bold text-[0.500rem] sm:text-[0.800rem] lg:text-[1rem]">
            <p>Red Palnts</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.350rem] text-gray-400 sm:text-[0.600rem]">
              Contact
            </p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
            <p>Youtube</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.350rem] text-gray-400 sm:text-[0.600rem]">
              Resource
            </p>
            <p className="hover:cursor-pointer" onClick={handleReturnPolicy}>
              Return Policy
            </p>
            <p>Track An Order</p>
            <p>FAQS</p>
            <p className="hover:cursor-pointer" onClick={handlePrivacy}>
              Privacy Policy
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[0.350rem] text-gray-400 sm:text-[0.600rem]">
              About
            </p>
            <p className=" hover:cursor-pointer" onClick={handleAbout}>
              Our Story
            </p>
            <p onClick={handleNavigate} className="hover:cursor-pointer">
              Careers
            </p>
            <p>Press</p>
          </div>

          <div className="sm:text-[0.700rem]">
            <select className="bg-gray-300 lg:py-2">
              <option className="w-left" value="">
                EUR
              </option>
              <option className="w-left" value="option 1">
                option 1
              </option>
              <option className="w-left" value="option 2">
                option 2
              </option>
              <option className="w-left" value="option 3">
                option 3
              </option>
            </select>
          </div>
        </div>
        <div className="mb-4 mt-10 lg:mt-[5rem]">
          <p className="mt-5 text-center text-[0.400rem] text-gray-400 lg:text-[0.600rem]">
            Designed by Ahmad Bilal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
