import { FC, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};
export default ScrollToTop;
