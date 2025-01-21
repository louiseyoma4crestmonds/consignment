import Router from "next/router";
import Image from "next/image";
import Footer from "@/organisms/Footer";
import UtilityBar from "@/organisms/UtilityBar";
import specificRate from "public/calculator.png";
import van from "public/transport.png";
import suppiles from "public/supplies.png";
import account from "public/black-user.png";

function OpenAccount(): JSX.Element {
  return (
    <div>
      <UtilityBar getCelebrityId={() => {}} />
      <div>
        <div
          className="phone:h-[250px] w-full   "
          style={{
            backgroundImage: `url('/open-hero.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "",
            height: "400px",
          }}
        >
          <div className="w-full h-full flex place-content-center ">
            <div className="self-center w-full text-white px-16 phone:px-4 space-y-4 phone:text-center">
              <div className="font-black text-5xl text-backgroundCream">
                Open an account
              </div>
              <div className="w-4/6 phone:w-full ">
                Take advantage of our services and solutions designed to meet
                all of your shipping requirements. Open a FedEx shipping account
                below. Let’s get started!
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-16 space-y-8 border-b">
          <div className="text-4xl">
            Sign up now and enjoy personalized shipping rates!
          </div>
          <div>
            Open a corporate account and enjoy our standard 30 days credit
            terms.
          </div>
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
              OPEN ACCOUNT
            </div>
          </div>
          <div className="text-4xl">Opening an account has its benefits</div>
        </div>
        <div className="flex flex-row phone:flex-col phone:gap-y-12 justify-between text-center py-16 px-16">
          <div className="space-y-8">
            <Image src={specificRate} width={80} height={80} />
            <div className="text-2xl">Get your account-specific rate</div>
          </div>
          <div className="space-y-8">
            <Image src={van} width={80} height={80} />
            <div className="text-2xl">Schedule and manage pickup</div>
          </div>
          <div className="space-y-8">
            <Image src={suppiles} width={80} height={80} />
            <div className="text-2xl">Free supplies</div>
          </div>
          <div className="space-y-8">
            <Image src={account} width={80} height={80} />
            <div className="text-2xl">View and manage your bills online</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OpenAccount;
