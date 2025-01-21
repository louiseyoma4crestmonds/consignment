import Router from "next/router";
import { useEffect, useState } from "react";
import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import { getSessionDetails } from "./api";

function Dashboard(): JSX.Element {
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    if (token === "") {
      getSessionDetails()
        .then((response: any) => {
          setToken(response?.user.accessToken.token.tokenData.userToken);
          setFirstName(response?.user.accessToken.token.tokenData.firstName);
          setEmail(response?.user.accessToken.token.tokenData.email);
        })
        .catch(() => {
          Router.replace({ pathname: "/sign-in" });
        });
    }
  });

  return (
    <div>
      <UtilityBar getCelebrityId={() => {}} />
      <div>
        <div
          className="phone:h-[250px] w-full   "
          style={{
            backgroundImage: `url('/Open-hero.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "",
            height: "400px",
          }}
        >
          <div className="w-full h-full flex place-content-center ">
            <div className="self-center w-full text-white px-16 phone:px-4 space-y-4 phone:text-center">
              <div className="font-black text-5xl text-backgroundCream">
                Welcome, {firstName===""?email:firstName}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-16 space-y-8 border-b">
          <div className="w-full flex place-content-center px-4">
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {}}
              onClick={() => {
                Router.push({ pathname: "/open-account-business" });
              }}
              className="w-1/6 phone:w-full text-center text-lg text-white p-3 bg-orange100 font-bold uppercase hover:opacity-90"
            >
              Get Started
            </div>
          </div>
          <div className="text-4xl">Lets Create your shipment</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
