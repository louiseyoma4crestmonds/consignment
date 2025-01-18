import { useEffect, useState } from "react";

import Router from "next/router";

import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import { getSessionDetails } from "src/pages/api";

function Dashboard(): JSX.Element {
  const [token, setToken] = useState<string>("");
  const [introPage, setIntroPage] = useState<boolean>(true);

  const slideInLeftAnimation = keyframes`${slideInLeft}`;

  const SlideInLeftDiv = styled.div`
    animation: 3s ${slideInLeftAnimation};
  `;

  useEffect(() => {
    if (token === "") {
      getSessionDetails()
        .then((response: any) => {
          setToken(response?.user.accessToken.token.tokenData.userToken);
        })
        .catch(() => {
          Router.replace({ pathname: "/" });
        });
    }
  });

  useEffect(() => {
    if (introPage) {
      setIntroPage(true);
      setTimeout(() => {
        setIntroPage(false);
      }, 2000);
    }
  });

  return (
    <div className={!introPage ? "hidden" : ""}>
      <div className="w-screen h-screen flex place-content-center bg-maroon100">
        <div className="self-center uppercase font-bold text-backgroundCream text-2xl">
          <SlideInLeftDiv>Checkout you dashboard...</SlideInLeftDiv>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
