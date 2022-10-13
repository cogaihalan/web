import React from "react";
import UOVO_Motion_Black from "../../public/assets/UOVO_Motion_Black.gif";
import UOVO_Motion_White from "../../public/assets/UOVO_Motion_White.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Logo(props) {
  const theme = props.theme;
  return (
    <div className="logo">
      <LazyLoadImage
        effect="blur"
        src={
          theme === "dark-theme" ? UOVO_Motion_Black.src : UOVO_Motion_White.src
        }
        alt="Logo"
        className="logo-image"
      />
    </div>
  );
}
