import React, { useState, useEffect } from "react";

const AnimatedNumber = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count+ 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [count]);

  return <div>{count}</div>;
};

export default AnimatedNumber;