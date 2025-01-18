import { useEffect, useState } from "react";
import Router from "next/router";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import Backdrop from "@/atoms/Backdrop";
import NewModal from "@/organisms/NewModal/NewModal";
import CustomInput from "@/molecules/CustomInput";
import CheckBox from "@/atoms/CheckBox";
import { createFreeAccount } from "./api";

function Register(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [signupError, setSignupError] = useState<boolean>(false);
  const securityQuestion = [
    "What is your mothers first",
    "What is your place of birth",
    "What is the name of a school you attended",
    "What is your fathers middle name",
    "What is the name of a childhood pet",
  ];

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(setEmail, setFirstName, setLastName);

  useEffect(() => {
    if (introPage) {
      setIntroPage(true);
      setTimeout(() => {
        setIntroPage(false);
      }, 2000);
    }
  });

  const createAccount = async (event: any) => {
    event.preventDefault();
    createFreeAccount({ email, firstName, lastName }).then((response: any) => {
      if (response?.data?.code === 201) {
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          Router.replace({ pathname: "/sign-in" });
        }, 3000);
      } else {
        setSignupError(true);
        setTimeout(() => {
          setSignupError(false);
        }, 3000);
      }
    });
  };

  return (
    <div>
      <div>
        {/* UTILITY BAR */}
        <div>
          <UtilityBar getCelebrityId={() => {}} />
        </div>
        {/* END OF UTILITY BAR */}

        <div className="w-full flex place-content-center bg-backgroundCream100 py-16 phone:px-6 shadow-md drop-shadow-2xl">
          <div className="w-3/6 phone:w-full border border-maroon100">
            <form onSubmit={createAccount}>
              <div className="w-full text-xs  text-maroon100">
                <div className="w-full bg-maroon100 text-white p-1">
                  <div className="flex gap-x-8 text-xs font-bold ">
                    <div className="flex place-content-center gap-x-1">
                      <div className="text-center border border-white rounded-full w-5 h-5">
                        1
                      </div>
                      <div className="self-center">Contact Info</div>
                    </div>
                    {/* <div className="flex place-content-center gap-x-1"><div className="text-center border border-white rounded-full w-5 h-5">2</div><div className="self-center">Account Info</div></div>
                    <div className="flex place-content-center gap-x-1"><div className="text-center border border-white rounded-full w-5 h-5">3</div><div className="self-center">Confirmation</div></div> */}
                  </div>
                </div>
                <div className="bg-gray50 text-black py-4 px-2">
                  *Required fields are in bold
                </div>
                <div className="bg-gray100 text-white py-1 px-2">
                  Login Information
                </div>
                <div className="bg-gray60 text-white py-4 px-8 space-y-4 ">
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Create a User ID"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Password"
                      variant="password"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Confirm Password"
                      variant="password"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                </div>
                <div className="bg-white text-white py-2 px-2" />
                <div className="bg-gray100 text-white py-1 px-2">
                  Your Secret Question
                </div>
                <div className="bg-gray60 text-black  px-2  ">
                  <div className="text-black py-4">
                    This question is an extra security measure used to access
                    your profile or to confirm your identity in case you forget
                    your password.
                  </div>
                  <div className="px-8 space-y-4 py-4">
                    <div className="w-3/6 phone:w-full">
                      <CustomInput
                        label="Secrete Question"
                        variant="selectBox"
                        selectOptions={securityQuestion}
                        required
                        width="middle"
                        height="small"
                        getInputedValue={() => {}}
                      />
                    </div>
                    <div className="w-3/6 phone:w-full">
                      <CustomInput
                        label="Secret Answer"
                        variant="text"
                        required
                        width="middle"
                        height="small"
                        getInputedValue={() => {}}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white text-white py-2 px-2" />
                <div className="bg-gray100 text-white py-1 px-2">
                  Contact Information
                </div>
                <div className="bg-gray60 text-white py-4 px-8 space-y-4 ">
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="First Name"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Last Name"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>

                  <div className="w-full">
                    <div className="text-xs text-black">
                      Please enter your company name if applicable and address
                      to facilitate package pickup.
                    </div>
                    <div className="w-3/6 phone:w-full">
                      <CustomInput
                        label="Company"
                        variant="text"
                        required
                        width="middle"
                        height="small"
                        getInputedValue={() => {}}
                      />
                    </div>
                  </div>
                  <div className="w-3/6 phone:w-full text-black">
                    <CustomInput
                      label="Country"
                      variant="selectBox"
                      selectOptions={[
                        "United States",
                        "United Kingdom",
                        "China",
                      ]}
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Zip/Postal"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Address 1"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Address 2"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="City"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="State/Province"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Email"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Re-enter Email"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Phone #"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={() => {}}
                    />
                  </div>
                </div>
                <div className="bg-white text-white py-2 px-2" />
                <div className="bg-gray100 text-white py-1 px-2">
                  Terms and conditions
                </div>
                <div className="bg-gray60 text-black  px-2  ">
                  <div className="text-black py-4">
                    I have read, understood and agree to be bound by the
                    following. I also understand how FedEx intends to use my
                    information.
                  </div>
                  <div className="px-8 space-y-4 py-4">
                    <div className="w-5/6 phone:w-full flex gap-x-1">
                      <div>
                        <CheckBox
                          checked={false}
                          state="default"
                          getCheckedElement={() => {}}
                        />
                      </div>
                      <div>
                        {" "}
                        I would like to receive information about FedEx via
                        e-mail, including special offers and promotions. You can
                        withdraw your consent at any time.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray50 flex  flex-row-reverse px-8 py-4">
                  <button
                    className="w-1/6 phone:w-full bg-maroon100 text-white p-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div
              className={
                signupError
                  ? "w-full text-center text-[#FF4B4B] text-sm py-2"
                  : "hidden"
              }
            >
              Email already exists please try again
            </div>
          </div>
        </div>
        <NewModal
          modalHeading="Account Creation Status"
          setShowModal={() => {
            setShowSuccessModal(false);
          }}
        >
          <div className="w-full  text-center py-8 space-y-4">
            <div className="flex place-content-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.174 5.3335H20.8273C11.1207 5.3335 5.33398 11.1202 5.33398 20.8268V43.1468C5.33398 52.8802 11.1207 58.6668 20.8273 58.6668H43.1473C52.854 58.6668 58.6407 52.8802 58.6407 43.1735V20.8268C58.6673 11.1202 52.8807 5.3335 43.174 5.3335ZM44.7473 25.8668L29.6273 40.9868C29.254 41.3602 28.7473 41.5735 28.214 41.5735C27.6807 41.5735 27.174 41.3602 26.8007 40.9868L19.254 33.4402C18.4807 32.6668 18.4807 31.3868 19.254 30.6135C20.0273 29.8402 21.3073 29.8402 22.0807 30.6135L28.214 36.7468L41.9207 23.0402C42.694 22.2668 43.974 22.2668 44.7473 23.0402C45.5207 23.8135 45.5207 25.0668 44.7473 25.8668Z"
                  fill="#43B765"
                />
              </svg>
            </div>

            <div className="w-full text-center font-bold text-base">
              Account Created Successfully
            </div>
            <div className="text-orange100">
              Your login credentials has been sent to your email
            </div>
          </div>
        </NewModal>
        <div className={showSuccessModal ? "" : "hidden"}>
          <Backdrop />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
