import { useEffect } from "react";

export default function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    console.log("Mount");

    return () => {
      console.log("Cleanup");
      clearInterval(id);
    };
  }, []);

  return <div>Timer</div>;
}
