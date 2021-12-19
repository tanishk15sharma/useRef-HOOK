import React, { useState, useEffect, useRef } from "react";

const TimerFunction = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((previousTimer) => previousTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
      //   setTimer("");
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button
        // ref={Interval}
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </div>
  );
};

export default TimerFunction;
