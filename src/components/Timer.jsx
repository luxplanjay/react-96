import { useEffect, useRef } from "react";

export default function Timer() {
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const stopInterval = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <button onClick={stopInterval}>Stop interval</button>
    </div>
  );
}
