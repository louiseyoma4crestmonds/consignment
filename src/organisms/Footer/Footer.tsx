import Image from "next/image";
import facebook from "public/facebook.png";
import x from "public/x.png";
import youtube from "public/youtube.png";
import linkedin from "public/linkedin.png";

function Footer(): JSX.Element {
  return (
    <div>
      <div className="px-4 bg-[#fbfafd] py-16 text-xs">
        <div className="phone:space-y-8 space-y-0 flex flex-row phone:flex-col gap-x-24 phone:gap-x-0">
          <div className="space-y-4">
            <div className="uppercase text-maroon100 font-bold">
              Our Company
            </div>
            <div className="capitalize space-y-4">
              <div>About GlobeGoExpress</div>
              <div>Conditions for Carriage</div>
              <div>Binding cooperate Rules</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="uppercase text-maroon100 font-bold">
              New Customer
            </div>
            <div className="capitalize space-y-4">
              <div>Open an Account</div>
              <div>New Customer Center</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="uppercase text-maroon100 font-bold">
              More from GlobeGoExpress
            </div>
            <div className="capitalize space-y-4">
              <div>Fuel Surchages</div>
              <div>Resources</div>
              <div>GlobeGoExpress Locations</div>
              <div>Rates & Surchages</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="uppercase text-maroon100 font-bold">
              Follow GlobeGoExpress
            </div>
            <div className="flex gap-x-4">
              <div>
                <Image src={facebook} width={24} height={24} />
              </div>
              <div>
                <Image src={x} width={24} height={24} />
              </div>
              <div>
                <Image src={youtube} width={24} height={24} />
              </div>
              <div>
                <Image src={linkedin} width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-maroon100 py-8 px-8 text-xs text-white text-center flex flex-row phone:flex-col phone:gap-y-4 justify-between">
        <div className="">
          Copyright © GlobeGoExpress 1995-2024. All Rights Reserved
        </div>
        <div>Terms of Use | Security & Privacy</div>
      </div>
    </div>
  );
}

export default Footer;
