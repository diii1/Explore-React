import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeout = setTimeout(() => tick(), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return (
    <div
      style={{
        fontSize: "25px",
        color: "#19345e",
        textAlign: "right",
        marginRight: "100px",
        marginTop: "10px",
      }}
    >
      {time.toLocaleString()}
    </div>
  );
}

export default Clock;
