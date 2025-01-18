import Router from "next/router";
import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import CustomInput from "@/molecules/CustomInput";
import CheckBox from "@/atoms/CheckBox";

function OpenBusinessAccount(): JSX.Element {
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
          <div className="w-3/6  phone:w-full">
            <CustomInput
              label="Company Name"
              variant="text"
              required
              width="middle"
              height="large"
              getInputedValue={() => {}}
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
                getInputedValue={() => {}}
              />
            </div>
            <div className="w-3/6  phone:w-full">
              <CustomInput
                label="Last Name"
                variant="text"
                required
                width="middle"
                height="large"
                getInputedValue={() => {}}
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
                getInputedValue={() => {}}
              />
            </div>
            <div className="w-3/6  phone:w-full">
              <CustomInput
                label="Postal Code"
                variant="text"
                required
                width="middle"
                height="large"
                getInputedValue={() => {}}
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
                getInputedValue={() => {}}
              />
            </div>
            <div className="w-3/6  phone:w-full">
              <CustomInput
                label="Phone Number"
                variant="phone"
                required
                width="middle"
                height="large"
                getInputedValue={() => {}}
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
                getInputedValue={() => {}}
              />
            </div>
            <div className="w-3/6  phone:w-full">
              <CustomInput
                label="Vat Number"
                variant="text"
                required
                width="middle"
                height="large"
                getInputedValue={() => {}}
              />
            </div>
          </div>
          <div className="w-full">
            <CustomInput
              variant="textarea"
              label="Message"
              height="large"
              width="full"
              getInputedValue={() => {}}
            />
          </div>
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
              information and news on specific FedEx solutions per email.
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
          <div className="w-full flex place-content-center p-4">
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => {}}
              onClick={() => {
                Router.push({ pathname: "" });
              }}
              className="w-1/6 phone:w-full text-center text-lg text-white p-3 bg-orange100 font-bold uppercase hover:opacity-90"
            >
              SUBMIT
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OpenBusinessAccount;
