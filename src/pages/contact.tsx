import { useEffect, useState } from "react";
import UtilityBar from "@/organisms/UtilityBar";
import Footer from "@/organisms/Footer";

function Contact(): JSX.Element {
  const [introPage, setIntroPage] = useState<boolean>(true);

  useEffect(() => {
    if (introPage) {
      setIntroPage(true);
      setTimeout(() => {
        setIntroPage(false);
      }, 1000);
    }
  });

  return (
    <div>
      <div className={introPage ? "hidden" : ""}>
        {/* UTILITY BAR */}
        <UtilityBar getCelebrityId={() => {}} />
        {/* END OF UTILITY BAR */}
        <div className="">
          <div className="text-center space-y-3 bg-green1">
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
                    Do you want to reach out to us?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-12 space-y-3 bg-green1">
            <div className="text-gold">MAIN OFFICE</div>
            <div className="uppercase font-bold">
              Mainzer Strasse 77, 64293 Darmstadt, Germany
            </div>
            <div className="text-gray1 text">
              <div>admin@globegoexpress.com</div>
            </div>
          </div>
          <div className="w-full ">
            <iframe
              title="mappedLocation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.9067901996286!2d8.630185675483963!3d49.88177697148916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd70932611473f%3A0x47d4612049e78e4e!2sMainzer%20Strasse%2077%2C%2064293%20Darmstadt%2C%20Germany!5e0!3m2!1sen!2sus!4v1747580141783!5m2!1sen!2sus"
              className="w-full h-72 tablet:h-[600px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
