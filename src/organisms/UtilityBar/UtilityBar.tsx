import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import CloseButton from "@/atoms/CloseButton";
import useClickOutside from "@/hooks/useClickOutside";
// import the icons you need
import logo from "public/logo.png";
import arrow from "public/arrow.png";
import user from "public/user.png";
import styles from "./UtilityBar.module.css";
import { UtilityBarProps } from "./UtilityBar.types";

function UtilityBar(props: UtilityBarProps): JSX.Element {
  const router = useRouter();
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [activeTab, setActiveTab] = useState("/");
  const { getCelebrityId } = props;
  const dropdownRef = useClickOutside(() => setSelectedMenu(""));

  useEffect(() => {
    setActiveTab(router.route);
  });

  const navigationLinks = [
    {
      name: "Tracking",
      link: "tracking",
      children: ["Manage your delivery", "Track by mobile"],
    },
    {
      name: "Support",
      link: "support",
      children: ["Locations", "FAQs", "Customer Support"],
    },
    {
      name: "Account",
      link: "account",
      children: ["My Profile", "Address Book", "open account"],
    },
  ];

  console.log(getCelebrityId);

  return (
    <div className="border-b border-b-maroon100 ">
      <div className={showMobileNavBar ? "flex flex-row-reverse " : "hidden"}>
        <div className=" absolute z-50 text-maroon100 bg-backgroundCream h-screen w-10/12 border border-maroon100 text-white">
          <div className="flex justify-between px-4 py-4 bg-maroon100 border-b border-b-backgroundCream border-maroon100">
            <div className="self-center font-bold text-md text-backgroundCream ">
              <Image src={logo} width={70} height={28} />
            </div>

            <div>
              <CloseButton
                onclick={() => {
                  setShowMobileNavBar(!showMobileNavBar);
                }}
              />
            </div>
          </div>
          {navigationLinks.map((link) => (
            <div
              // className="px-6 py-6 border-b border-b-maroon100 cursor-pointer flex justify-between hover:bg-maroon100 hover:text-backgroundCream"
              className={
                activeTab === `/${link.link}`
                  ? "px-6 py-6 phone:border-b border-b-maroon100 cursor-pointer flex justify-between bg-maroon100 text-backgroundCream hover:bg-backgroundCream hover:text-maroon100"
                  : "px-6 py-6 border-b phone:border-b-maroon100 text-maroon100 cursor-pointer flex justify-between hover:bg-maroon100 hover:text-backgroundCream"
              }
              tabIndex={0}
              role="button"
              onKeyDown={() => {}}
              onClick={() => {
                router.push({ pathname: `/${link.link}` });
              }}
            >
              <div className="self-center uppercase">{link.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.utilityBarContainer} bg-maroon100`}>
        <div className="  flex phone:justify-between phone:place-content-center  gap-x-0 phone:gap-x-0 px-8 phone:px-2 py-4">
          <div className="w-full flex justify-between">
            <div className="hidden phone:flex">
              <div className="self-center text-lg phone:text-xs text-white uppercase">
                <Image src={logo} width={70} height={28} />
              </div>
            </div>
            <div className="phone:hidden">
              <div className="self-center flex gap-x-16">
                <div className="phone:hidden text-lg font-black phone:text-xs text-white uppercase">
                  <Image src={logo} width={70} height={28} />
                </div>
                <div
                  ref={dropdownRef}
                  className="flex text-white gap-x-8 phone:hidden"
                >
                  {navigationLinks.map((link: any) => (
                    <div
                      tabIndex={0}
                      role="button"
                      onKeyDown={() => {}}
                      onClick={() => {
                        setSelectedMenu(link.name);
                      }}
                      className="cursor-pointer self-center hover:underline z-20 space-y-4"
                    >
                      <div>
                        {link.name}{" "}
                        <span className="text-xs">
                          <Image src={arrow} height={10} width={10} />
                        </span>{" "}
                      </div>

                      <div
                        className={
                          link.name === selectedMenu
                            ? "absolute w-auto h-2 text-black bg-white "
                            : "hidden"
                        }
                      >
                        <div className="text-maroon100 shadow-md">
                          {link?.children?.map((child) => (
                            <div
                              onClick={() => {
                                router.push({
                                  pathname: `/${child.split(" ")[0]}
                                    "-" 
                                    ${child.split(" ")[1]}`,
                                });
                              }}
                              tabIndex={0}
                              role="button"
                              onKeyDown={() => {}}
                              className="px-6 py-4 border-b bg-white relative"
                            >
                              {child}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="self-center text-white phone:hidden">
              <div
                tabIndex={0}
                role="button"
                onKeyDown={() => {}}
                onClick={() => {
                  Router.push({ pathname: "/sign-in" });
                }}
                className="flex gap-x-4"
              >
                <div className="self-center">Sign Up/Log In</div>
                <div className="self-center">
                  <Image src={user} height={30} width={30} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="self-center space-y-1 cursor-pointer tablet:hidden desktop:hidden plasma:hidden laptop:hidden"
            tabIndex={0}
            role="button"
            onKeyDown={() => {}}
            onClick={() => {
              setShowMobileNavBar(!showMobileNavBar);
            }}
          >
            .
            <div className="h-1 w-6 bg-white" />
            <div className="h-1 w-6 bg-white" />
            <div className="h-1 w-6 bg-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UtilityBar;
