import { useContext } from "react";
import langContext from "../lang-context";

export const LangSwitcher = () => {
  const ctxValue = useContext(langContext);
  console.log(ctxValue);

  return (
    <select
      value={ctxValue.lang}
      onChange={(e) => ctxValue.changeLang(e.target.value)}
    >
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};
