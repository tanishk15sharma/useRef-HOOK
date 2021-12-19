import React, { useEffect, useRef } from "react";

const FocusMe = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Hi Tanishk");

    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default FocusMe;
