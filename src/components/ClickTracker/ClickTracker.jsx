import { useState } from "react";
import { useEffect } from "react";

// ClickTracker mount > ClickTracker unmount > ClickTracker mount

const getInitialClicks = () => {
  const savedClicks = window.localStorage.getItem("my-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTracker() {
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    window.localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
