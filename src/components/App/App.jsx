import Reader from "../Reader";
import articles from "../../articles.json";
// import ClickTracker from "../ClickTracker/ClickTracker";
// import { useState } from "react";
// import Timer from "../Timer";
import css from "./App.module.css";

export default function App() {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={css.container}>
      <Reader items={articles} />
      {/* <ClickTracker /> */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Timer />} */}
    </div>
  );
}
