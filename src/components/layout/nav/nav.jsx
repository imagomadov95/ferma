import React from "react";
import Button from "/src/components/ui/button/button";
import { useLocation } from "react-router-dom";
import { AppRoute } from "/src/const";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <Button key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </Button>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button key={AppRoute.BUY} link={AppRoute.BUY}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pageUrl)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;
