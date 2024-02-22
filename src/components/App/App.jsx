import UserForm from "../UserForm";
import css from "./App.module.css";

export default function App() {
  const handleFormSubmit = (x) => {
    console.log(x);
  };

  return (
    <div className={css.container}>
      <h1>Forms with Formik</h1>
      <UserForm onDoStuffHehe={handleFormSubmit} />
    </div>
  );
}
