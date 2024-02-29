import { useRef, useState, forwardRef, useContext } from "react";
import { LangSwitcher } from "./LangSwitcher";
// import Articles from "./Articles/Articles";
// import UseMemoExample from "./UseMemoExample";
// import RefExample from "./RefExample";
// import Timer from "./Timer";
import langContext from "../lang-context";

export default function App() {
  // const [isVisible, setIsVisible] = useState(false);

  const ctxValue = useContext(langContext);
  console.log(ctxValue);

  return (
    <div>
      {/* <Articles /> */}
      {/* <UseMemoExample /> */}
      {/* <RefExample /> */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button> */}
      {/* {isVisible && <Timer />} */}

      <LangSwitcher />
      <p>Current lang: {ctxValue.lang}</p>
    </div>
  );
}
