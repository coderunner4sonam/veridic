import React from "react";

function Header() {
  return (
    <div
      style={{
        border: "5px solid black",
        height: "65px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h5
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          alignItems: "center",
          height: "55px",
          width: "60px",
          backgroundColor: "cornflowerblue",
          borderRadius: "50px",
          border: "1px solid purple",
        }}
      >
        DAILY NEWS
      </h5>
    </div>
  );
}

export default Header;
