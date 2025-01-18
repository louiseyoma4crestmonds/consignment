import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Moment from "react-moment";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import Mappy from "@/organisms/Mappy";
import { getTrackingId, getTrackingIdHistory } from "./api";

function PackageTracking(): JSX.Element {
  const router = useRouter();
  const [trackingData, setTrackingData] = useState<any>();
  const [trackingIdHistory, setTrackingIdHistory] = useState<any>(["empty"]);

  useEffect(() => {
    if (trackingData === undefined) {
      getTrackingId(router.query.trackingId).then((response) => {
        setTrackingData(response.data.data);
      });
    }
    if (trackingData !== undefined) {
      getTrackingIdHistory(trackingData.tracking_id).then((response) => {
        setTrackingIdHistory(response.data.data);
      });
    }
  }, [trackingData, router.query.trackingId]);

  return (
    <div className=" text-black">
      <div>
        {/* UTILITY BAR */}
        <div>
          <UtilityBar getCelebrityId={() => {}} />
        </div>
        {/* END OF UTILITY BAR */}

        <div />

        {trackingIdHistory[0] !== "empty" ? (
          <div>
            <div className="w-full mt-16 phone:mt-8  flex place-content-center px-4">
              <div className="w-2/6 phone:w-full  border self-center rounded-lg shadow-md">
                <div className="border-b">
                  <div className="text-center py-2 font-bold ">
                    Tracking Status
                  </div>
                </div>
                <div className="px-4 pt-4">
                  {trackingIdHistory.map((record) => (
                    <div>
                      {record.activity_status === true ? (
                        <div>
                          <div className="flex gap-x-1">
                            <div className="self-center h-2 w-2 rounded-full bg-orange100" />
                            <div className="self-center text-xs text-orange100">
                              {record.activity}
                            </div>
                          </div>
                          <div className="ml-1 border-l border-l-orange100 text-xs font-bold px-2">
                            <div className="font-normal py-1">
                              <Moment format="dddd, DD, MM, YYYY, hh:mm A">
                                {record.date}
                              </Moment>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex gap-x-1">
                            <div className="self-center h-2 w-2 rounded-full bg-[#585857]" />
                            <div className="self-center font-bold text-xs text-[#585857]">
                              {record.activity}
                            </div>
                          </div>
                          <div className="ml-1 border-l border-l-[#adadac] text-xs font-bold px-2">
                            <div className="font-normal text-[#adadac] py-1">
                              <Moment format="dddd, DD, MM, YYYY, hh:mm A">
                                {record.date}
                              </Moment>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-4 py-4" />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="w-full bg-home px-8 phone:px-4 h-screen flex place-content-center">
          <div className=" w-full  flex flex-row-reverse gap-x-8 phone:gap-x-0">
            <div className="mt-8 w-full flex place-content-center ml-8 phone:ml-0">
              {trackingData !== undefined ? (
                <Mappy
                  longitude={trackingData?.longitude}
                  lattitude={trackingData?.latitude}
                  trackingId={trackingData?.tracking_id}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PackageTracking;
