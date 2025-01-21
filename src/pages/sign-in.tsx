import { useEffect, useState } from "react";
import Router from "next/router";
import { signIn } from "next-auth/react";
import NewModal from "@/organisms/NewModal/NewModal";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import Backdrop from "@/molecules/Backdrop";
import CustomInput from "@/molecules/CustomInput";

function SignIn(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successfulRequest, setSuccessfulRequest] = useState<boolean>(false);
  const [failedRequest, setFailedRequest] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      email,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res?.status === 200) {
          setSuccessfulRequest(true);
          setShowModal(true);
          setTimeout(() => {
            setSuccessfulRequest(true);
            setShowModal(true);
            Router.push({ pathname: "/dashboard" });
          }, 3000);
        } else {
          setShowModal(true);
          setFailedRequest(true);
          setTimeout(() => {
            setShowModal(false);
            setFailedRequest(false);
          }, 3000);
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
          Enter your email and password to log in
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
          CREATE A FREE ACCOUNT
        </div>
        <div className="w-full flex place-content-center bg-backgroundCream100 py-16 phone:px-6 ">
          <div className="space-y-8">
            <CustomInput
              width="full"
              label="Email"
              required
              variant="text"
              getInputedValue={setEmail}
            />
            <CustomInput
              width="full"
              label="Password"
              required
              variant="password"
              getInputedValue={setPassword}
            />
            <div className="w-full flex row-reverse gap-x-2 place-content-center">
              <div>Remember my email</div>
              <input className="" type="radio" />
            </div>
            <div>
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  signinUser();
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
              FORGOT YOUR EMAIL OR PASSWORD?
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
        <div className={showModal ? "" : "hidden"}>
          <Backdrop>
            <NewModal
              modalHeading="Sign In"
              showModal={showModal}
              setShowModal={setShowModal}
            >
              <div
                className={
                  successfulRequest
                    ? "w-full text-center space-y-4 text-2xl font-bold py-12 text-green100"
                    : "hidden"
                }
              >
                <div>Login Successful</div>
                <div className="w-full flex place-content-center">
                  <svg
                    width="97"
                    height="96"
                    viewBox="0 0 97 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65.261 8.00024H31.741C17.181 8.00024 8.50098 16.6802 8.50098 31.2402V64.7202C8.50098 79.3202 17.181 88.0002 31.741 88.0002H65.221C79.781 88.0002 88.461 79.3202 88.461 64.7602V31.2402C88.501 16.6802 79.821 8.00024 65.261 8.00024ZM67.621 38.8002L44.941 61.4802C44.381 62.0402 43.621 62.3602 42.821 62.3602C42.021 62.3602 41.261 62.0402 40.701 61.4802L29.381 50.1602C28.221 49.0002 28.221 47.0802 29.381 45.9202C30.541 44.7602 32.461 44.7602 33.621 45.9202L42.821 55.1202L63.381 34.5602C64.541 33.4002 66.461 33.4002 67.621 34.5602C68.781 35.7202 68.781 37.6002 67.621 38.8002Z"
                      fill="#43B765"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={
                  failedRequest
                    ? "w-full text-center space-y-4 text-2xl font-bold py-12 text-errorRed"
                    : "hidden"
                }
              >
                <div>Wrong login credentials. Please Try again!</div>
                <div className="w-full flex place-content-center">
                  <svg
                    width="97"
                    height="96"
                    viewBox="0 0 97 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M78.5397 23.4L54.7797 9.68C50.8997 7.44 46.0997 7.44 42.1797 9.68L18.4597 23.4C14.5797 25.64 12.1797 29.8 12.1797 34.32V61.68C12.1797 66.16 14.5797 70.32 18.4597 72.6L42.2197 86.32C46.0997 88.56 50.8997 88.56 54.8197 86.32L78.5797 72.6C82.4597 70.36 84.8597 66.2 84.8597 61.68V34.32C84.8197 29.8 82.4197 25.68 78.5397 23.4ZM45.4997 31C45.4997 29.36 46.8597 28 48.4997 28C50.1397 28 51.4997 29.36 51.4997 31V52C51.4997 53.64 50.1397 55 48.4997 55C46.8597 55 45.4997 53.64 45.4997 52V31ZM52.1797 66.52C51.9797 67 51.6997 67.44 51.3397 67.84C50.5797 68.6 49.5797 69 48.4997 69C47.9797 69 47.4597 68.88 46.9797 68.68C46.4597 68.48 46.0597 68.2 45.6597 67.84C45.2997 67.44 45.0197 67 44.7797 66.52C44.5797 66.04 44.4997 65.52 44.4997 65C44.4997 63.96 44.8997 62.92 45.6597 62.16C46.0597 61.8 46.4597 61.52 46.9797 61.32C48.4597 60.68 50.2197 61.04 51.3397 62.16C51.6997 62.56 51.9797 62.96 52.1797 63.48C52.3797 63.96 52.4997 64.48 52.4997 65C52.4997 65.52 52.3797 66.04 52.1797 66.52Z"
                      fill="#C80012"
                    />
                  </svg>
                </div>
              </div>
            </NewModal>
          </Backdrop>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
