import React from "react";
import "./Header.scss";

const HeaderLink = props => {
  const goToDiv = url => {
    if (url) {
      if (!url.includes("#")) {
        window.location.href = url;
      } else {
        const elmnt = document.getElementById(url.split("#")[1]);
        elmnt.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="header-link" onClick={() => goToDiv(props.url)}>
      {props.children}
    </div>
  );
};

export default HeaderLink;
