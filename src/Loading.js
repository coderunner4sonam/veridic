import React, { useEffect, useState } from "react";

function Loading() {
  let [loader, setLoader] = useState(true);
  let [count, setCount] = useState(0);

  let k = null;
  useEffect(() => {
    if (loader === true) {
      k = setInterval(() => {
        setCount((pre) => (pre = pre + 1));
      }, 46);
    }

    return () => clearInterval(k);
  }, [count, loader]);

  return (
    <div
      style={{
        height: "10px",
        backgroundColor: "yellow",
        width: "100%",
        display: "flex",
        borderRadius: "10px",
      }}
    >
      {[...Array(80)].map((element, index) => (
        <div
          style={{
            backgroundColor: count > index ? "green" : "white",
            width: "200px",
            height: "10px",
          }}
          key={index + index}
        ></div>
      ))}
    </div>
  );
}

export default Loading;
