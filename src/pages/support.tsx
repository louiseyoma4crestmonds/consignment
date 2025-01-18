import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import ContactForm from "@/organisms/ContactForm";

function CustomerSupport(): JSX.Element {
  return (
    <div>
      <UtilityBar getCelebrityId={() => {}} />
      <div>
        <div
          className="phone:h-[250px] w-full   "
          style={{
            backgroundImage: `url('/hero-banner-support.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "",
            height: "400px",
          }}
        >
          <div className="w-full h-full flex place-content-center ">
            <div className="self-center w-full text-white px-16 phone:px-4 space-y-4 phone:text-center">
              <div className="font-black text-5xl text-backgroundCream">
                How can we help?
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-16 space-y-8 border-b">
          <div className="text-4xl">Contact Support</div>
          <div>
            <ContactForm />
          </div>
          {/*
          <div className="flex flex-row phone:flex-col phone:gap-x-0 phone:gap-y-4 gap-x-4 px-16 phone:px-4">
            <div className="w-1/2 phone:w-full bg-gray50">I am receiving</div>
            <div className="w-1/2 phone:w-full bg-gray50">I am sending</div>
          </div>
          */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerSupport;
