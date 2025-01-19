import Router from "next/router";
import { useState } from "react";
import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import { trackingIdIsValid } from "./api";

function Tracking(): JSX.Element {
  const [trackingId, setTrackingId] = useState("");

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
  return (
    <div>
      <UtilityBar getCelebrityId={() => {}} />
      <div>
        <div
          className="phone:h-[250px] w-full   "
          style={{
            backgroundImage: `url('/tracking-hero.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "",
            height: "400px",
          }}
        >
          <div className="w-full h-full flex place-content-center ">
            <div className="self-center w-full text-white px-16 phone:px-4 space-y-4 phone:text-center">
              <div className="font-black text-5xl text-backgroundCream">
                Tracking
              </div>
              <div className="w-4/6 phone:w-full ">
                Our tracking tools give you control over your shipments, by
                helping you stay informed so you can ship with confidence.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-16 space-y-8 border-b">
          <div className="text-4xl">Track the way you want!</div>
          <div>
            Need the status of your shipment or proof of delivery? Enter your
            tracking number or reference number below.
          </div>
          <div className="w-full flex place-content-center px-4">
            <div className="w-full flex place-content-center  h-full">
              <div className="self-center flex place-content-center gap-x-1">
                <div className="w-full border">
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
          <div className="text-md text-orange100">
            Tracking ID was not found
          </div>
        </div>
        <div className="px-32 phone:px-4 py-16">
          <div className="flex flex-row phone:flex-col phone:gap-y-8 gap-y-0 gap-x-2 justify-between">
            <div className="w-full space-y-4">
              <div className="font-bold">GlobeGoExpress Tracking</div>
              <div>
                GlobeGoExpress Tracking, the tool at the top of your page gives
                you shipment updates in just one click. A tool built for speed,
                simplicity and convenience. Locate your shipment right on the
                map, even without logging in.
              </div>
            </div>
            <div className="w-full">
              <div className="font-bold">Key Benefits</div>
              <div className="px-4">
                <div className="flex gap-x-2">
                  <div className="self-center w-2 h-2 rounded-full bg-black" />
                  <div className="self-center">
                    Track in near real time without logging in
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div className="self-center w-2 h-2 rounded-full bg-black" />
                  <div className="self-center">
                    Get an update in one click on the homepage
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div className="self-center w-2 h-2 rounded-full bg-black" />
                  <div className="self-center">
                    Visualize your shipments location on a map
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

export default Tracking;
