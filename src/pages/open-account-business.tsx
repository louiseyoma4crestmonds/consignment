import Router from "next/router";
import { useState } from "react";
import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import CustomInput from "@/molecules/CustomInput";
import CheckBox from "@/atoms/CheckBox";
import NewModal from "@/organisms/NewModal/NewModal";
import Backdrop from "@/molecules/Backdrop";
import { createBusinessAccount } from "./api";

function OpenBusinessAccount(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [successfulRequest, setSuccessfulRequest] = useState<boolean>(false);
  const [failedRequest, setFailedRequest] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [vat, setVat] = useState("");
  const [company, setCompany] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");

  const createAccount = async (event: any) => {
    event.preventDefault();
    createBusinessAccount({
      email,
      firstName,
      lastName,
      address1,
      company,
      postalCode,
      message,
      vat,
      phone,
      city,
    }).then((response: any) => {
      if (response?.data?.code === 201) {
        setSuccessfulRequest(true);
        setShowModal(true);

        setTimeout(() => {
          setShowModal(false);
          setSuccessfulRequest(false);
          Router.reload();
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
      <UtilityBar getCelebrityId={() => {}} />
      <div>
        <div
          className="phone:h-[250px] w-full   "
          style={{
            backgroundImage: `url('/Open-Account-Business-Hero.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="w-full h-full flex place-content-center ">
            <div className="self-center w-full text-white px-16 phone:px-4 space-y-4 phone:text-center">
              <div className="font-black text-5xl phone:text-3xl text-backgroundCream">
                Open an account Request
              </div>
            </div>
          </div>
        </div>
        <div className="w-full space-y-4 p-16 phone:px-4">
          <div className=" ">
            Contact us to create a shipping account for your company and we will
            be in touch in 1 business day. Please fill the mandatory fields
            marked with an asterisk.
          </div>
          <div>
            Note: Inquiries received on Friday or Public Holidays will be
            responded on the next business day.
          </div>
        </div>

        <div className="px-16 phone:px-4 space-y-4">
          <form onSubmit={createAccount}>
            <div className="w-3/6  phone:w-full">
              <CustomInput
                label="Company Name"
                variant="text"
                required
                width="middle"
                height="large"
                getInputedValue={setCompany}
              />
            </div>
            <div className="flex flex-row phone:flex-col gap-x-2 phone:gap-x-0">
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="First Name"
                  variant="text"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setFirstName}
                />
              </div>
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Last Name"
                  variant="text"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setLastName}
                />
              </div>
            </div>
            <div className="flex flex-row phone:flex-col gap-x-2 phone:gap-x-0">
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Address"
                  variant="text"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setAddress1}
                />
              </div>
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Postal Code"
                  variant="text"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setPostalCode}
                />
              </div>
            </div>
            <div className="flex flex-row phone:flex-col gap-x-2 phone:gap-x-0">
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="City"
                  variant="text"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setCity}
                />
              </div>
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Phone Number"
                  variant="phone"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setPhone}
                />
              </div>
            </div>
            <div className="flex flex-row phone:flex-col gap-x-2 phone:gap-x-0">
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Email"
                  variant="email"
                  required
                  width="middle"
                  height="large"
                  getInputedValue={setEmail}
                />
              </div>
              <div className="w-3/6  phone:w-full">
                <CustomInput
                  label="Vat Number"
                  variant="text"
                  required={false}
                  width="middle"
                  height="large"
                  getInputedValue={setVat}
                />
              </div>
            </div>
            <div className="w-full">
              <CustomInput
                variant="textarea"
                label="Message"
                height="large"
                width="full"
                getInputedValue={setMessage}
              />
            </div>
            <div className="space-y-4">
              <div>
                <div>Service</div>
                <div className="flex gap-x-2">
                  <CheckBox
                    state="default"
                    checked={false}
                    getCheckedElement={() => {}}
                  />
                  <div>International</div>
                </div>
              </div>
              <div className="flex gap-x-2">
                <CheckBox
                  state="default"
                  checked={false}
                  getCheckedElement={() => {}}
                />
                <div>
                  I agree to receive regular communications of promotions,
                  information and news on specific GlobeGoExpress solutions per
                  email.
                </div>
              </div>
              <div className="flex gap-x-2">
                <CheckBox
                  state="default"
                  checked={false}
                  getCheckedElement={() => {}}
                />
                <div>I accept the terms and conditions</div>
              </div>
            </div>

            <div className="w-full flex  place-content-center">
              <button
                className="w-1/6 phone:w-full bg-maroon100 text-white p-4"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={showModal ? "" : "hidden"}>
        <Backdrop>
          <NewModal
            modalHeading="Business Account Request"
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
              <div>Request has been sent successfully</div>
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
                There was a problem sending your request. Please Try again!
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

      <Footer />
    </div>
  );
}

export default OpenBusinessAccount;
