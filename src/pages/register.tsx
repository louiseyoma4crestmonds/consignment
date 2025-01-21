import { useEffect, useState } from "react";
import Router from "next/router";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";
import Backdrop from "@/molecules/Backdrop";
import NewModal from "@/organisms/NewModal/NewModal";
import CustomInput from "@/molecules/CustomInput";
import { createFreeAccount } from "./api";

function Register(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successfulRequest, setSuccessfulRequest] = useState<boolean>(false);
  const [failedRequest, setFailedRequest] = useState<boolean>(false);
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
  const [confirmEmail, setConfirmEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secreteAnswer, setSecreteAnswer] = useState("");
  const [secreteQuestion, setSecretQuestion] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("United States");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

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
    createFreeAccount({
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      confirmEmail,
      userId,
      secreteAnswer,
      secreteQuestion,
      address1,
      address2,
      company,
      country,
      postalCode,
      province,
      phone,
      city,
    }).then((response: any) => {
      console.log("++++++++++++++++: ", response);
      if (response?.data?.code === 201) {
        setSuccessfulRequest(true);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccessfulRequest(false);
          Router.replace({ pathname: "/sign-in" });
        }, 3000);
      } else {
        setShowModal(true);
        setFailedRequest(true);
        setTimeout(() => {
          setShowModal(false);
          setFailedRequest(false);
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
                      getInputedValue={setUserId}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Password"
                      variant="password"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setPassword}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Confirm Password"
                      variant="password"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setConfirmPassword}
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
                        getInputedValue={setSecretQuestion}
                      />
                    </div>
                    <div className="w-3/6 phone:w-full">
                      <CustomInput
                        label="Secret Answer"
                        variant="text"
                        required
                        width="middle"
                        height="small"
                        getInputedValue={setSecreteAnswer}
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
                      getInputedValue={setFirstName}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Last Name"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setLastName}
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
                        getInputedValue={setCompany}
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
                      getInputedValue={setCountry}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Zip/Postal"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setPostalCode}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Address 1"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setAddress1}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Address 2"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setAddress2}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="City"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setCity}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="State/Province"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setProvince}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Email"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setEmail}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Re-enter Email"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setConfirmEmail}
                    />
                  </div>
                  <div className="w-3/6 phone:w-full">
                    <CustomInput
                      label="Phone #"
                      variant="text"
                      required
                      width="middle"
                      height="small"
                      getInputedValue={setPhone}
                    />
                  </div>
                </div>
                <div className="bg-white text-white py-2 px-2" />
                <div className="bg-gray100 text-white py-1 px-2">
                  Terms and conditions
                </div>
                <div className="bg-gray60 text-black  px-2  ">
                  <div className="text-black py-4">
                    By submitting this form you agree that you have read,
                    understood and agree to be bound by our terms. You also
                    understand how GlobeGoExpress intends to use your
                    information.
                  </div>
                  <div className="px-8 space-y-4 py-4">
                    <div className="w-5/6 phone:w-full flex gap-x-1">
                      <div></div>
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
          </div>
        </div>
        <div className={showModal ? "" : "hidden"}>
          <Backdrop>
            <NewModal
              modalHeading="Account Creation"
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
                <div>Account has been created successfully</div>
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
                <div>
                  There was a problem with your egistration. Please Try again!
                </div>
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

export default Register;
