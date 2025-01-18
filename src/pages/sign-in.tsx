import { useEffect, useState } from "react";
import Router from "next/router";
import { signIn } from "next-auth/react";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import Backdrop from "@/atoms/Backdrop";
import CustomInput from "@/molecules/CustomInput";

function SignIn(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [showSuccessModal] = useState<boolean>(false);

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  console.log(userId);

  useEffect(() => {
    if (introPage) {
      setIntroPage(true);
      setTimeout(() => {
        setIntroPage(false);
      }, 2000);
    }
  });

  const signinUser = async () => {
    await signIn("credentials", {
      email: "",
      password,
      redirect: false,
    })
      .then((res) => {
        if (res?.status === 200) {
          Router.push({ pathname: "/dashboard" });
        } else {
          // setSigninError("Wrong username or password");
        }
      })
      .catch((err) => {
        console.log("catch error", err);
      });
  };

  console.log(signinUser);

  return (
    <div>
      <div>
        {/* UTILITY BAR */}
        <div>
          <UtilityBar getCelebrityId={() => {}} />
        </div>
        {/* END OF UTILITY BAR */}

        <div className="w-full text-center mt-12 text-4xl ">
          Enter your user ID and password to log in
        </div>
        <div
          tabIndex={0}
          role="button"
          onKeyDown={() => {}}
          onClick={() => {
            Router.push({ pathname: "/register" });
          }}
          className="w-full text-center text-blue100 font-bold mt-12 hover:underline"
        >
          CREATE A USER ID FOR AN EXISTING ACCOUNT
        </div>
        <div className="w-full flex place-content-center bg-backgroundCream100 py-16 phone:px-6 ">
          <div className="space-y-8">
            <CustomInput
              width="full"
              label="User ID"
              variant="text"
              getInputedValue={setUserId}
            />
            <CustomInput
              width="full"
              label="Password"
              variant="text"
              getInputedValue={setPassword}
            />
            <div className="w-full flex row-reverse gap-x-2 place-content-center">
              <div>Remember my user ID</div>
              <input className="" type="radio" />
            </div>
            <div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  Router.push({ pathname: "" });
                }}
                className="w-full text-center text-lg text-white p-3 bg-orange100 font-bold uppercase hover:opacity-90"
              >
                Login
              </div>
            </div>

            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {}}
              onClick={() => {
                Router.push({ pathname: "" });
              }}
              className="w-full text-center text-blue100 font-bold mt-12 hover:underline"
            >
              FORGOT YOUR USER ID OR PASSWORD?
            </div>

            <div className="space-y-4 py-8">
              <div className="text-2xl w-full text-center">Need help?</div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  Router.push({ pathname: "/support" });
                }}
                className="w-full text-center text-blue100 font-bold hover:underline"
              >
                Customer Support
              </div>
            </div>
          </div>
          {/*
          <div className="w-3/6 phone:w-full rounded-lg border border-maroon100 py-24 px-24 phone:px-4 ">
            <form onSubmit={() => {}}>
              <div className="w-full space-y-6 text-sm text-maroon100">
                <div className="w-full">
                  <input
                    className="w-full p-3 outline-none border rounded-lg border-maroon100 hover:border-orange100"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="w-full">
                  <input
                    className="w-full p-3 outline-none border rounded-lg border-maroon100"
                    placeholder="Last Name"
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => {
                    signinUser();
                  }}
                  onClick={() => {
                    signinUser();
                  }}
                  className="cursor-pointer p-4 text-center hover:opacity-90 rounded-lg bg-maroon100 text-white w-full"
                >
                  Sign In
                </div>
                <div
                  tabIndex={0}
                  role="button"
                  onKeyDown={() => {
                    Router.push({ pathname: "/register" });
                  }}
                  onClick={() => {
                    Router.push({ pathname: "/register" });
                  }}
                  className="cursor-pointer p-4 text-center hover:opacity-90 rounded-lg border border-maroon100 text-maroon100 text-maroon100 w-full"
                >
                  Register
                </div>
              </div>
            </form>
            <div
              className={
                signinError !== ""
                  ? "w-full text-center text-errorRed text-sm py-2"
                  : "hidden"
              }
            >
              {signinError}
            </div>
          </div>
          */}
        </div>
        <div className={showSuccessModal ? "" : "hidden"}>
          <Backdrop />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
