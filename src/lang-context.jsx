import { createContext, useState } from "react";

const langContext = createContext();

export default langContext;

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("uk");

  return (
    <langContext.Provider
      value={{
        lang,
        changeLang: setLang,
      }}
    >
      {children}
    </langContext.Provider>
  );
};
