import React from "react";

function Banner({ status, children }) {
  switch (status) {
    case "success":
      return <div className="happy banner">{children}</div>;
    case "fail":
      return <div className="sad banner">{children}</div>;
    default:
      return <div className="banner">{children}</div>;
  }
}

export default Banner;
