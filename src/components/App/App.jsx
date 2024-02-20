import { useState } from "react";
import UserForm from "../UserForm";
import css from "./App.module.css";
import TextInput from "../TextInput";
import LangSwitcher from "../LangSwitcher";
import Form from "../Form";

export default function App() {
  const [text, setText] = useState("qwerty");
  const [lang, setLang] = useState("en");
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <div className={css.container}>
      <h1>Forms in React</h1>

      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.role}</p>
        </div>
      )}
      <UserForm onSubmit={saveUser} />
      <hr />

      <TextInput value={text} onChange={setText} />
      <p>{text}</p>
      <hr />

      <LangSwitcher lang={lang} onSelect={setLang} />
      <p>Current lang: {lang}</p>

      <hr />
      <Form />
    </div>
  );
}
