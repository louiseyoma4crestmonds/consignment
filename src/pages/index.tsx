import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import Router from "next/router";
import { useEffect, useState } from "react";

import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import calculator from "public/calculator.png";
import orderTracking from "public/order-tracking.png";
import singlePackage from "public/package.png";
import van from "public/van.png";
import location from "public/location.png";
import coin from "public/coin.png";
import supermarket from "public/supermarket.png";
import hacker from "public/hacker.webp";
import { trackingIdIsValid } from "./api";

function Home(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [trackingId, setTrackingId] = useState("");

  const slideInDownAnimation = keyframes`${slideInUp}`;

  const SlideInUpDiv = styled.div`
    animation: 4s ${slideInDownAnimation};
  `;
  const confirmTrackingId = () => {
    trackingIdIsValid(trackingId).then((response: any) => {
      if (response.data.data === true) {
        Router.push({
          pathname: "/package-tracking",
          query: { trackingId },
        });
      }
      console.log("tracking id is valid: ", response.data.data);
    });
  };

  useEffect(() => {
    if (introPage) {
      setIntroPage(true);
      setTimeout(() => {
        setIntroPage(false);
      }, 3000);
    }
  }, [introPage]);

  return (
    <div className="w-full bg-white">
      <div className="w-full">
        {/* UTILITY BAR */}
        <div>
          <UtilityBar getCelebrityId={() => {}} />
        </div>
        {/* END OF UTILITY BAR */}

        <div
          className="phone:h-[250px] w-full  opacity-90 "
          style={{
            backgroundImage: `url('/packages.webp')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "",
            height: "600px",
          }}
        >
          <div className="w-full place-content-center  h-[200px]  text-center">
            <div className="flex place-content-center  h-full">
              <div className="w-full self-center ">
                <SlideInUpDiv>
                  <div className="w-full flex place-content-center">
                    <div className="font-black text-5xl phone:text-3xl text-backgroundCream">
                      Welcome to <span>Globe</span>
                      <span className="text-orange100">Go</span>
                      <span>Express</span>
                    </div>
                  </div>
                </SlideInUpDiv>
              </div>
            </div>
            <div className="flex place-content-center h-full">
              <div className="self-center flex h-full place-content-center">
                <div className="self-center flex place-content-center bg-backgroundCream w-48 phone:w-28 h-36 uppercase font-bold">
                  <div className="self-center">
                    <div>
                      <Image
                        src={calculator}
                        height={50}
                        width={50}
                        alt="rates and transit time"
                      />
                    </div>
                    <div>Rate & Transit Times</div>
                  </div>
                </div>
              </div>

              <div className="self-center flex place-content-center text-white bg-maroon100 w-48 phone:w-28 h-48 uppercase font-bold">
                <div className="self-center">
                  <div>
                    <Image
                      src={orderTracking}
                      height={50}
                      width={50}
                      alt="tracking"
                    />
                  </div>
                  <div>Track</div>
                </div>
              </div>
              <div className="self-center flex place-content-center bg-backgroundCream w-48 phone:w-28 h-36 uppercase font-bold">
                <div className="self-center">
                  <div>
                    <Image
                      src={singlePackage}
                      height={50}
                      width={50}
                      alt="package"
                    />
                  </div>
                  <div>Ship</div>
                </div>
              </div>
            </div>
            <div className="w-full flex place-content-center  h-full">
              <div className="self-center flex place-content-center gap-x-1">
                <div className="w-full">
                  <input
                    onChange={(e) => {
                      setTrackingId(e.target.value);
                    }}
                    placeholder="tracking id"
                    className="p-4 outline-none uppercase border-l-4 border-l-white focus:border-l-maroon100"
                  />
                </div>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => {}}
                  onClick={confirmTrackingId}
                  className="w-full text-center text-lg text-white p-3 bg-orange100 uppercase"
                >
                  Track
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-16 phone:py-12 ">
          <div className="w-full text-center text-2xl text-maroon100">
            Manage your shipments
          </div>
          <div className="w-full uppercase text-blue100 flex flex-row phone:flex-col gap-x-16 phone:gap-x-0 gap-y-0 phone:gap-y-8 place-content-center py-24 phone:py-12">
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => {}}
              className="text-center space-y-4"
            >
              <Image src={van} width={100} height={100} alt="van" />
              <div>Redirect your package</div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => {}}
              className="text-center space-y-4"
            >
              <Image src={location} width={100} height={100} alt="location" />
              <div>Find Locations</div>
            </div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => {}}
              className="text-center space-y-4"
            >
              <Image src={coin} width={100} height={100} alt="coin" />
              <div>Fuel Surcharge</div>
            </div>
          </div>
        </div>

        <div className="px-32 phone:px-4">
          <div className="bg-maroon100 text-wite flex flex-row phone:flex-col phone:gap-y-8 p-12 phone:px-4 justify-between">
            <div className="phone:self-center">
              <Image src={supermarket} width={100} height={100} alt="market" />
            </div>
            <div className="basis-6/12 space-y-4 text-white">
              <div className="font-bold text-2xl">
                Sign up now to enjoy personalized shipping rates!
              </div>
              <div className="font-light">
                Benefit from our services and solutions designed to meet all of
                your shipping needs.
              </div>
            </div>
            <div className="basis-4/12">
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  Router.push({ pathname: "/open-account" });
                }}
                className="w-full text-center text-lg text-white p-3 bg-orange100 font-bold uppercase"
              >
                Open and account
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-8">
          <div className="flex flex-row phone:flex-col gap-x-4 phone:gap-x-0 phone:gap-y-4">
            <div>
              <Image src={hacker} alt="fraud-detection" />
            </div>
            <div className="h-full self-center flex place-content-center">
              <div className="space-y-4 place-content-center h-full self-center ">
                <div className="text-2xl">Recognize & Prevent Fraud</div>
                <div>
                  Common Warning Signs of Mail, Text or Online Scams and what to
                  do if you receive such communications.
                </div>
                <div>
                  <div className="py-4 text-center rounded-2xl text-blue100 border border-2 border-blue100">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
